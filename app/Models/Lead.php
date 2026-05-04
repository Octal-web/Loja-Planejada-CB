<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $table = 'leads';
    
    const CREATED_AT = 'criado';
    const UPDATED_AT = 'modificado';
    
    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'cep',
        'uf',
        'cidade',
        'conversoes',
        'cliente',
        'projeto',
        'token',
        'expectativa_investimento',
        'entrada',
        'dispositivo',
        'criado',
    ];

    protected $casts = [
        'criado' => 'datetime',
    ];
}