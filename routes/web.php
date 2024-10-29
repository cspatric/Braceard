<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserPreferenceController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);

});


Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user-preference', [UserPreferenceController::class, 'index'])->name('userpreference.index');
    Route::post('/user-preference', [UserPreferenceController::class, 'store'])->name('user.preferencestore');
    Route::put('/user-preference', [UserPreferenceController::class, 'update'])->name('user.preferenceupdate');
});

require __DIR__ . '/auth.php';
