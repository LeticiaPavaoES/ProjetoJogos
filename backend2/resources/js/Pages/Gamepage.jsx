import React, { useState, useEffect } from 'react';
import '@/Components/GamePage.css'; // Importando o arquivo de estilos CSS

export default function GamePage() {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const fetchGamePage = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=d4f7aa0a2d0a468bab12017d96f97cf1`);
            const gameData = await response.json();
            setGame(gameData);
            setLoading(false);
        };

        fetchGamePage();
    }, []);

    const Separator = () => {
        return (
            <div className='separator'></div>
        );
    };

    return (
        <div className="gamePageContainer">
            <header className="header">
                <h1 className="headerTitle">Game Page</h1>
                <h2>{game.name}</h2>
            </header>
            <Separator />
            <div className="boxGame">
                <div className="gameDetails">
                    {loading ? (
                        <div className="Loading">Loading... </div>
                    ) : (
                        <div className='cardGame'>
                            
                            <h3>Genres: {game.genres.map(genre => genre.name).join(', ')}</h3>
                            <img src={game.background_image} alt={game.name} className="gameImage" />
                            <h3>Rating: {game.rating}</h3>
                            <h3>Platforms: {game.platforms.map(platform => platform.name).join(', ')}</h3>
                          
                            <h3>Stores: {game.stores.map(store => store.name).join(', ')}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
