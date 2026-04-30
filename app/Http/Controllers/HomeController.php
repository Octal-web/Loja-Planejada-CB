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

        $previaRegulamento = '<p><strong>A&Ccedil;&Atilde;O PROMOCIONAL &ldquo;JOGADA PLANEJADA CASA BRASILEIRA&rdquo;</strong></p>

        <p>O presente Regulamento estabelece as condi&ccedil;&otilde;es da <strong>A&Ccedil;&Atilde;O PROMOCIONAL &ldquo;JOGADA PLANEJADA CASA BRASILEIRA</strong>&rdquo;, que &eacute;<strong> </strong>destinada a consumidores que adquirirem produtos da marca <em>Casa Brasileira</em>, em lojas autorizadas da marca devidamente credenciadas na Campanha. Nas compras realizadas a partir de R$ 49.990,00 (quarenta e nove mil, novecentos e noventa reais), e ap&oacute;s a quita&ccedil;&atilde;o de, no m&iacute;nimo, 50% (cinquenta por cento) do valor da compra, o participante far&aacute; jus a 01 (uma) Smart TV Samsung de 50 polegadas, sendo vedada qualquer substitui&ccedil;&atilde;o por produto de marca diversa, modelo diverso ou especifica&ccedil;&atilde;o inferior ou superior, devendo o pr&ecirc;mio corresponder exatamente &agrave; Smart TV Samsung de 50 polegadas.</p>';
        
        return Inertia::render('Home', [
            'request_group' => $request_group,
            'previaRegulamento' => $previaRegulamento
        ]);
    }
};