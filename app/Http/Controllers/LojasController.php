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
            
            $lojas_cnpjs = ['17.223.765/0001-93', '38.165.294/0001-84', '50.233.486/0001-86', '12.531.375/0001-67', '8.997.103/0001-80', '31.058.636/0001-18', '8.837.156/0001-33', '11.043.525/0001-20', '18.432.905/0001-68', '59.030.515/0001-87', '36.245.316/0001-90', '28.763.411/0001-58', '54.265.299/0001-35', '31.735.677/0001-00', '26.490.330/0001-04', '55.465.200/0001-01', '12.020.184/0001-30', '19.770.115/0001-93', '18.432.905/0001-04', '54.607.491/0001-62', '12.531.375/0001-48', '34.761.399/0001-45', '21.578.743/0001-13', '7.499.680/0001-89', '46.425.851/0001-87', '51.689.015/0001-40', '52.012.899/0001-66', '19.065.329/0001-69', '23.410.188/0001-41', '27.040.455/0001-97', '9.572.220/0001-64', '37.701.435/0001-73', '44.050.566/0001-01', '37.978.099/0001-00', '40.944.905/0001-34', '64.121.424/0001-97', '33.486.453/0001-29', '58.456.034/0001-75', '20.810.688/0001-82'];

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