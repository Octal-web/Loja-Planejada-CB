<?php

namespace App\Services;

use App\Models\Cliente;
use App\Models\Expectativa;
use App\Models\Lead;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

use Carbon\Carbon;

class ClientService
{
    public function create(array $data): array
    {
        return DB::transaction(function () use ($data) {
            
            $cepData = $this->fetchCepData($data['cep']);
            
            if (!$cepData) {
                throw new \Exception('Por favor, informe um CEP válido.');
            }
            
            $clientData = $this->prepareClientData($data, $cepData);
            
            $cliente = Cliente::create($clientData);

            $expectativa = $this->createExpectativa($cliente->id, $data);

            $conversoes = $this->countConversions($cliente->email);

            $lead = $this->createLead($cliente, $expectativa, $data, $conversoes, $data->entrada, $data->posicao_formulario);

            return [
                'cliente' => $cliente,
                'expectativa' => $expectativa,
                'lead' => $lead,
            ];
        });
    }

    protected function fetchCepData(string $cep): ?array
    {
        $cep = preg_replace("/[^0-9]/", "", $cep);
        
        try {
            $response = Http::timeout(30)
                ->get("https://viacep.com.br/ws/{$cep}/json/");

            if ($response->successful()) {
                $data = $response->json();
                
                if (isset($data['erro']) && $data['erro']) {
                    return null;
                }
                
                return $data;
            }
            
            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    protected function prepareClientData(array $data, array $cepData): array
    {
        return [
            'nome' => $data['nome'],
            'telefone' => $data['telefone'],
            'email' => $data['email'],
            'cep' => preg_replace("/[^0-9]/", "", $data['cep']),
            'uf' => $cepData['uf'] ?? null,
            'endereco' => $cepData['logradouro'] ?? null,
            'bairro' => $cepData['bairro'] ?? null,
            'cidade' => $cepData['localidade'] ?? null,
            'cod_marca' => 'casabrasileira',
            'token' => md5(time() . rand(0, 9999)),
            'canal_atendimento_id' => 3,
            'tipo_cadastro' => 'L',
            'status_cliente' => 'C',
            'data' => now(),
            'mkt_midia_origem' => $data['origem'] ?? null,
            'mkt_campanha_origem' => $data['campanha'] ?? null,
            'mkt_grupo_origem' => $data['grupo'] ?? null,
            'mkt_anuncio_origem' => $data['anuncio'] ?? null,
        ];
    }

    protected function createExpectativa(int $clienteId, array $data): Expectativa
    {
        $ambientesArray = [
            '100' => 'Todos os ambientes',
            '1' => 'Cozinhas',
            '2' => 'Dormitórios',
            '3' => 'Sala de Estar',
            '4' => 'Integrados',
            '5' => 'Home office',
            '6' => 'Lavanderias',
            '7' => 'Lavabos',
            '8' => 'Closets',
        ];

        $interesseText = 'Ambientes selecionados: ';
        $ambientesSelecionados = [];

        foreach ($data['ambiente'] as $ambienteId) {
            if (isset($ambientesArray[$ambienteId])) {
                $ambientesSelecionados[] = $ambientesArray[$ambienteId];
            }
        }

        $interesseText .= implode(', ', $ambientesSelecionados) . '.';

        return Expectativa::create([
            'cliente_id' => $clienteId,
            'cod_marca' => 'casabrasileira',
            'observacao_cliente' => $interesseText,
            'expectativa_investimento' => null,
        ]);
    }

    protected function countConversions(string $email): int
    {
        return Lead::query()
            ->where([
                'email' => $email,
                'cliente' => 'casabrasileira',
                'projeto' => 'facaseuprojeto'
            ])
            ->count();
    }

    protected function createLead(Cliente $cliente, Expectativa $expectativa, array $data, int $conversoes, ?string $horaEntrada, ?string $posicaoFormulario): Lead {
        $dispositivo = $this->detectDevice();

        return Lead::create([
            'nome' => $cliente->nome,
            'email' => $cliente->email,
            'telefone' => $cliente->telefone,
            'cep' => $cliente->cep,
            'uf' => $cliente->uf,
            'cidade' => $cliente->cidade,
            'conversoes' => $conversoes,
            'cliente' => 'casabrasileira',
            'projeto' => 'facaseuprojeto',
            'token' => $cliente->token,
            'expectativa_investimento' => $expectativa->expectativa_investimento,
            'entrada' => $horaEntrada ? Carbon::parse($horaEntrada) : null,
            'dispositivo' => $dispositivo,
            'posicao_formulario' => $posicaoFormulario,
        ]);
    }

    protected function detectDevice(): string
    {
        $mobileAgents = ['iPhone', 'iPad', 'Android', 'BlackBerry', 'Windows Phone'];
        $userAgent = request()->userAgent() ?? '';

        foreach ($mobileAgents as $agent) {
            if (stripos($userAgent, $agent) !== false) {
                return 'Mobile';
            }
        }

        return 'Computador';
    }
}