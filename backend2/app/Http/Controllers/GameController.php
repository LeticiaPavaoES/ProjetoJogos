<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function gamepage()
    {
        $gameData = [
            'name' => 'Nome do Jogo',
            'background_image' => 'url-da-imagem-do-jogo.jpg',
        ];

        return Inertia::render('Gamepage', [
            'gameData' => $gameData
        ]);
    }
}
