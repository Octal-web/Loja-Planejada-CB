<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Estado;
use App\Models\Loja;

class LojasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function carregar(Request $request) {
        if($request->ajax()){
            $id = request('id');
            $tipo = request('type');

            if ($id == '-1') {
                return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Por favor, escolha um estado válido.']);
            }
            
            $lojas_cnpjs = ['54.265.299/0001-35', '12.020.184/0001-30', '11.043.525/0001-20', '28.763.411/0001-58', '58.456.034/0001-75', '07.499.680/0001-89', '12.531.375/0001-67', '46.425.851/0001-87'];

            $lojas_cnpjs = array_map(function($cnpj) {
                return preg_replace('/\D/', '', $cnpj);
            }, $lojas_cnpjs);
            
            $lojas = Loja::query()
                ->where([
                    'segmento' => 'EXCLUSIVO',
                    'marca' => 'casabrasileira',
                ])
                ->whereIn('cnpj', $lojas_cnpjs)
                ->when($tipo === 'estado', function($query) use ($id) {
                    $query->whereHas('estado', function($query) use ($id) {
                        $query->where('state_id', $id);
                    });
                })
                ->when($tipo === 'cidade', function($query) use ($id) {
                    $query->whereHas('cidade', function($query) use ($id) {
                        $query->where('city_id', $id);
                    });
                })
                ->get()
                ->map(function($loja) {
                    // Formata CEP
                    $cep = preg_replace('/\D/', '', $loja->cep ?? '');
                    $cep = str_pad($cep, 8, '0', STR_PAD_LEFT);
                    $cep = substr($cep, 0, 5) . '-' . substr($cep, 5, 3);
            
                    return [
                        'id' => $loja->estab_id,
                        'nome_fantasia' => $this->formatarNome($loja->fantasia),
                        'endereco' => $this->formatarNome($loja->endereco . ' - ' . $loja->bairro),
                        'cep' => $cep,
                        'cidade' => $loja->cidade . ' - ' . $loja->uf,
                        'telefone' => $loja->telefone,
                        'whatsapp' => $loja->whatsapp
                    ];
                });

            return response()->json([
                'lojas' => $lojas
            ]);
        }
        else {
            return Inertia::location(route('Home.index'));
        }
    }

    private function formatarNome($texto)
    {
        $texto = preg_replace('/\bautorizada\b/i', '', $texto);
        $texto = trim(preg_replace('/\s+/', ' ', $texto));
        $texto = mb_strtolower($texto, 'UTF-8');
        $excecoes = ['de', 'da', 'do', 'das', 'dos', 'e'];
        $palavras = explode(' ', $texto);

        foreach ($palavras as $i => $palavra) {
            if ($i === 0 || !in_array($palavra, $excecoes)) {
                $palavras[$i] = mb_convert_case($palavra, MB_CASE_TITLE, 'UTF-8');
            }
        }

        return implode(' ', $palavras);
    }
}