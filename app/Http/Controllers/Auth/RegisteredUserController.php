<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Adiciona a validação para os novos campos
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user' => 'nullable|string|max:255',  // Campo user
            'bio' => 'nullable|string',  // Campo bio
            'birthday' => 'nullable|date',  // Campo birthday
            'country' => 'nullable|string|max:255',  // Campo country
            'city' => 'nullable|string|max:255',  // Campo city
            'neighborhood' => 'nullable|string|max:255',  // Campo neighborhood
            'street' => 'nullable|string|max:255',  // Campo street
            'status' => 'nullable|string|max:255',  // Campo status
            'hobby' => 'nullable|string|max:255',  // Campo hobby
            'music' => 'nullable|string|max:255',  // Campo music
            'sport' => 'nullable|string|max:255',  // Campo sport
            'educacion' => 'nullable|string|max:255',  // Campo educacion
            'instituicao' => 'nullable|string|max:255',  // Campo instituicao
            'course' => 'nullable|string|max:255',  // Campo course
            'work' => 'nullable|string|max:255',  // Campo work
            'deficiency' => 'nullable|string|max:255',  // Campo deficiency
            'allergy' => 'nullable|string|max:255',  // Campo allergy
            'medications' => 'nullable|string|max:255',  // Campo medications
            'medical_conditions' => 'nullable|string|max:255',  // Campo medical_conditions
            'blood_type' => 'nullable|string|max:255',  // Campo blood_type
            'disorders' => 'nullable|string|max:255',  // Campo disorders
            'name_emergency' => 'nullable|string|max:255',  // Campo name_emergency
            'relation_emergency' => 'nullable|string|max:255',  // Campo relation_emergency
            'telefone_emergency' => 'nullable|string|max:255',  // Campo telefone_emergency
            'email_emergency' => 'nullable|string|email|max:255',  // Campo email_emergency
            'instagram' => 'nullable|string|max:255',  // Campo instagram
            'tiktok' => 'nullable|string|max:255',  // Campo tiktok
            'site' => 'nullable|string|max:255',  // Campo site
            'linkedin' => 'nullable|string|max:255',  // Campo linkedin
            'whatsapp' => 'nullable|string|max:255',  // Campo whatsapp
        ]);

        // Criação do usuário com os novos campos
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user' => $request->user,
            'bio' => $request->bio,
            'birthday' => $request->birthday,
            'country' => $request->country,
            'city' => $request->city,
            'neighborhood' => $request->neighborhood,
            'street' => $request->street,
            'status' => $request->status,
            'hobby' => $request->hobby,
            'music' => $request->music,
            'sport' => $request->sport,
            'educacion' => $request->educacion,
            'instituicao' => $request->instituicao,
            'course' => $request->course,
            'work' => $request->work,
            'deficiency' => $request->deficiency,
            'allergy' => $request->allergy,
            'medications' => $request->medications,
            'medical_conditions' => $request->medical_conditions,
            'blood_type' => $request->blood_type,
            'disorders' => $request->disorders,
            'name_emergency' => $request->name_emergency,
            'relation_emergency' => $request->relation_emergency,
            'telefone_emergency' => $request->telefone_emergency,
            'email_emergency' => $request->email_emergency,
            'instagram' => $request->instagram,
            'tiktok' => $request->tiktok,
            'site' => $request->site,
            'linkedin' => $request->linkedin,
            'whatsapp' => $request->whatsapp,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
