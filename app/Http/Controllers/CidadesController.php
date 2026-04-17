<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Estado;
use App\Models\Cidade;

class CidadesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function carregar(Request $request) {
        $search = request('q');

        if (!$search) {
            return redirect()->back()->with('message', ['type' => 'error', 'msg' => 'Por favor, insira um termo de busca.']);
        }

        $estados = Estado::query()
            ->where('state', 'like', "%{$search}%")
            ->orderBy('state', 'ASC')
            ->get()
            ->map(function($estado) {
                return [
                    'value' => $estado->state_id,
                    'label' => $estado->state,
                ];
            });

        $ufs = [
            1 => 'AC',
            2 => 'AL',
            3 => 'AP',
            4 => 'AM',
            5 => 'BA',
            6 => 'CE',
            7 => 'DF',
            8 => 'ES',
            10 => 'GO',
            11 => 'MA',
            12 => 'MT',
            13 => 'MS',
            14 => 'MG',
            15 => 'PA',
            16 => 'PB',
            17 => 'PR',
            18 => 'PE',
            19 => 'PI',
            20 => 'RJ',
            21 => 'RN',
            22 => 'RS',
            23 => 'RO',
            9 => 'RR',
            25 => 'SC',
            24 => 'TO',
            27 => 'SE',
            26 => 'SP',
        ];

        $cidades = Cidade::query()
            ->where('city', 'like', "%{$search}%")
            ->orderBy('city', 'ASC')
            ->with('estado')
            ->get()
            ->map(function($cidade) use ($ufs) {
                $uf = $ufs[$cidade->estado->state_id] ?? '';

                return [
                    'value' => $cidade->city_id,
                    'label' => $cidade->city . ' - ' . $uf,
                ];
            });

        return response()->json([
            'estados' => $estados,
            'cidades' => $cidades
        ]);
    }
}