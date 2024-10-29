<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user',
        'bio',
        'birthday',
        'country',
        'city',
        'neighborhood',
        'street',
        'status',
        'hobby',
        'music',
        'sport',
        'educacion',
        'instituicao',
        'course',
        'work',
        'deficiency',
        'allergy',
        'medications',
        'medical_conditions',
        'blood_type',
        'disorders',
        'name_emergency',
        'relation_emergency',
        'telefone_emergency',
        'email_emergency',
        'instagram',
        'tiktok',
        'site',
        'linkedin',
        'whatsapp',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'birthday' => 'date', // Cast 'birthday' to date
            // Adicione outros casts conforme necessário
        ];
    }
}
