<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::group(["prefix" => "users"], function () {
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/login', 'AuthController@login');
});
