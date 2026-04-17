<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CidadesController;
use App\Http\Controllers\LojasController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\RegulamentoController;
use App\Http\Controllers\PoliticasController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/jogada-planejada')->group(function() {
    Route::get('/', [HomeController::class, 'index'])->name('Home.index');
    Route::get('/cidades/carregar', [CidadesController::class, 'carregar'])->name('Cidades.carregar');
    Route::post('/lojas/carregar', [LojasController::class, 'carregar'])->name('Lojas.carregar');
    
    Route::post('/contato/enviar', [ContatoController::class, 'enviar'])->name('Contato.enviar');

    Route::get('/regulamento', [RegulamentoController::class, 'index'])->name('Regulamento.index');

    Route::get('/politica-de-privacidade', [PoliticasController::class, 'privacidade'])->name('Politicas.privacidade');
});