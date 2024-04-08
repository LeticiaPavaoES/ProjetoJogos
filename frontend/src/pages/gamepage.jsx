import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/game.css'

const GamePage = () => {
    const { id } = useParams(); 
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGamePage = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=d4f7aa0a2d0a468bab12017d96f97cf1`);
            const gameData = await response.json();
            setGame(gameData)
        }
        fetchGamePage()
    }, [id])

    return (
        <div className="gameDetails">
            {game ? (
                <>
                    <h2>{game.name}</h2>
                    <img src={game.background_image} alt={game.name} />
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
}

export default GamePage;



