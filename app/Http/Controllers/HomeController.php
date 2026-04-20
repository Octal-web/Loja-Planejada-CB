<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Estado;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $request_group = request()->group;

        $previaRegulamento = '<p>Período de vigência: A promoção é válida durante o período da Copa do Mundo, com datas de início e término a confirmar. Confira na loja participante.</p><p>Valor mínimo: Para participar, o cliente deve assinar um projeto de móveis planejados no valor igual ou superior a R$ 49.990,00 em uma das lojas Casa Brasileira participantes.</p><p>Prêmio: Uma Smart TV Samsung 50” por projeto assinado dentro do período da promoção, enquanto durarem os estoques.</p><p>Lojas participantes: A promoção é válida exclusivamente nas unidades Casa Brasileira participantes. Consulte a lista de lojas nesta página.</p><p>Não cumulativa: A promoção não é cumulativa com outras ofertas ou descontos especiais.</p><p>Regulamento completo: Sujeito a disponibilidade de estoque. O regulamento completo será disponibilizado neste espaço. Dúvidas? Entre em contato com a loja mais próxima.</p>';
        
        return Inertia::render('Home', [
            'request_group' => $request_group,
            'previaRegulamento' => $previaRegulamento
        ]);
    }
};