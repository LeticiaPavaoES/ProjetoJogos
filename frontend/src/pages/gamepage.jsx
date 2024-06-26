import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../css/game.css'
import { IoMdHome } from "react-icons/io";
import { CgSearchLoading } from "react-icons/cg";
import Header from '../components/header';


const GamePage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGamePage = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=d4f7aa0a2d0a468bab12017d96f97cf1`);
            const gameData = await response.json();
            setGame(gameData)
          
            console.log(game);
        }
        fetchGamePage()
    }, [id])

    const Separator = () => {
        return (
            <div className='separator'></div>
        );
    };

    return (
        <div>
            <Header />
            <Separator />
         
        <div className="boxGame">
            <div className="gameDetails">
                {game ? (
                    <> 
                        <div className='cardGame'>
                            <h2>{game.name}</h2>
                            <img src={game.background_image} alt={game.name} />
                            <h3>Genres: {game.genres.map(genre => genre.name).join(', ')}</h3>
                            <h3>Rating: {game.rating}</h3>
                            <h3>Platforms: {game.platforms.map(platform => platform.name).join(', ')}</h3>
                          
                            <h3>Stores: {game.stores.map(store => store.name).join(', ')}</h3>
                        </div>
                    </>
                ) : (
                    <div className="Loading">Loading... <CgSearchLoading /></div>
                )}
            </div>
        </div>
        </div>
    )
}

export default GamePage