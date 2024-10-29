<?php

namespace App\Http\Controllers;

use App\Models\UserPreference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class UserPreferenceController extends Controller
{
    public function index()
    {
        // Obtendo as preferências do usuário logado
        $userPreference = UserPreference::where('user_id', auth()->id())->get();

        $user = auth()->user();

        return Inertia::render('UserPreferences/Index', [
            'userpreference' => $userPreference,
            'user' => $user,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'status' => 'required|string|max:255',
            'hobby' => 'nullable|string|max:255',
            'music' => 'nullable|string|max:255',
            'sports' => 'nullable|string|max:255',
        ]);

        UserPreference::create([
            'user_id' => Auth::id(),
            'status' => $request->status,
            'hobby' => $request->hobby,
            'music' => $request->music,
            'sports' => $request->sports,
        ]);

        return redirect()->back()->with('success', 'Preferências salvas com sucesso!');
    }

    public function update(Request $request)
    {
        $request->validate([
            'status' => 'required|string|max:255',
            'hobby' => 'nullable|string|max:255',
            'music' => 'nullable|string|max:255',
            'sports' => 'nullable|string|max:255',
        ]);

        $userPreference = UserPreference::where('user_id', Auth::id())->first();

        // Atualizando as preferências
        $userPreference->update([
            'status' => $request->status,
            'hobby' => $request->hobby,
            'music' => $request->music,
            'sports' => $request->sports,
        ]);

        return redirect()->back()->with('success', 'Preferências atualizadas com sucesso!');
    }
}
