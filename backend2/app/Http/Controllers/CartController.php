<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class CartController extends Controller
{
    public function cart()
    {
        // Obtenha os dados do carrinho do LocalStorage
        $cartData = json_decode(request()->cookie('gameCart'), true);

        // Passa os dados para a view 'cart.index'
        return view('cart.index', compact('cartData'));
    }

    public function removeItem(Request $request)
    {
        try {
            // Obtém o ID do jogo a ser removido
            $gameId = $request->input('id');

            // Obtém os dados do carrinho do LocalStorage
            $cartData = json_decode(request()->cookie('gameCart'), true);

            // Filtra os jogos para remover o jogo com o ID correspondente
            $updatedCartData = array_filter($cartData, function ($item) use ($gameId) {
                return $item['id'] !== $gameId;
            });

            // Salva os dados atualizados na Local Storage
            $this->saveToLocalStorage($updatedCartData);

            // Retorna uma resposta de sucesso
            return response()->json(['success' => true, 'message' => 'Game removed from cart successfully']);
        } catch (\Exception $e) {
            // Retorna uma resposta de erro
            return response()->json(['success' => false, 'message' => 'Error removing game from cart', 'error' => $e->getMessage()], 500);
        }
    }
    
    public function addItem(Request $request)
    {
        try {
            // Obtém os dados do jogo a ser adicionado
            $gameData = $request->all();
    
            // Tenta encontrar um jogo com o mesmo título
            $existingGame = Game::where('title', $gameData['title'])->first();
    
            // Se não existir, cria um novo jogo
            if (!$existingGame) {
                $newGame = Game::create($gameData);
                $message = 'New game added to the database.';
            } else {
                $newGame = $existingGame;
                $message = 'Game already exists in the database.';
            }
    
            // Retorna uma resposta JSON com os detalhes do jogo
            return response()
                ->json(['success' => true, 'message' => $message, 'game' => $newGame])
                ->cookie('gameCart', json_encode($cartData), 60);
        } catch (\Exception $e) {
            return response()
                ->json(['success' => false, 'message' => 'Error adding game to cart', 'error' => $e->getMessage()], 500);
        }
    }

    protected function saveToLocalStorage($data)
    {
        // Codifica os dados em JSON
        $jsonData = json_encode($data);

        // Define o cookie para armazenar os dados na Local Storage
        return response()
            ->cookie('gameCart', $jsonData, 60);
    }
}
