<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('user')->nullable(); // Campo user
            $table->text('bio')->nullable(); // Mantenha como nullable ou remova o valor padrão

            $table->date('birthday')->nullable(); // Campo birthday
            $table->string('country')->nullable(); // Campo country
            $table->string('city')->nullable(); // Campo city
            $table->string('neighborhood')->nullable(); // Campo neighborhood
            $table->string('street')->nullable(); // Campo street
            $table->string('status')->nullable(); // Campo status
            $table->string('hobby')->nullable(); // Campo hobby
            $table->string('music')->nullable(); // Campo music
            $table->string('sport')->nullable(); // Campo sport
            $table->string('educacion')->nullable(); // Campo educacion
            $table->string('instituicao')->nullable(); // Campo instituicao
            $table->string('course')->nullable(); // Campo course
            $table->string('work')->nullable(); // Campo work
            $table->string('deficiency')->nullable(); // Campo deficiency
            $table->string('allergy')->nullable(); // Campo allergy
            $table->string('medications')->nullable(); // Campo medications
            $table->string('medical_conditions')->nullable(); // Campo medical_conditions
            $table->string('blood_type')->nullable(); // Campo blood_type
            $table->string('disorders')->nullable(); // Campo disorders
            $table->string('name_emergency')->nullable(); // Campo da primeira step de emergência
            $table->string('relation_emergency')->nullable(); // Campo da primeira step de emergência
            $table->string('telefone_emergency')->nullable(); // Campo da primeira step de emergência
            $table->string('email_emergency')->nullable(); // Campo da primeira step de emergência
            $table->string('instagram')->nullable(); // Campo de redes sociais
            $table->string('tiktok')->nullable(); // Campo de redes sociais
            $table->string('site')->nullable(); // Campo de redes sociais
            $table->string('linkedin')->nullable(); // Campo de redes sociais
            $table->string('whatsapp')->nullable(); // Campo de redes sociais
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
