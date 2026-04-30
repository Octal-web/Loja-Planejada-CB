<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model 
{
    use HasFactory;
    
    protected $table = 'clientes';

    protected $fillable = [
        'nome',
        'telefone',
        'email',
        'cep',
        'uf',
        'endereco',
        'bairro',
        'cidade',
        'cod_marca',
        'token',
        'canal_atendimento_id',
        'tipo_cadastro',
        'status_cliente',
        'data',
        'mkt_midia_origem',
        'mkt_campanha_origem',
        'mkt_grupo_origem',
        'mkt_anuncio_origem',
    ];

    protected $casts = [
        'data' => 'datetime',
    ];

    public function expectativas()
    {
        return $this->hasMany(Expectativa::class);
    }
}