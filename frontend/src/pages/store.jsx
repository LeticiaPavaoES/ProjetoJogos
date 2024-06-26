import { useState, useEffect } from 'react'
import '../css/game.css'

import { Link } from 'react-router-dom'
import { MdOutlineLibraryAdd, MdOutlineLibraryAddCheck, } from "react-icons/md"
import { getItem, setItem } from '../services/LocalStorageFuncs'

import { CgSearchLoading } from "react-icons/cg";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { FaComputer, FaRegStar } from "react-icons/fa6";
import Header from '../components/header'


export const Store = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [cart, setCart] = useState(getItem('glibrary') || [])
    const [loading, setLoading] = useState(true);
    const [menuAberto, setMenuAberto] = useState(false);
    const [setGenres] = useState(true)


    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true); // Define loading como true enquanto aguarda a resposta da API
            try {
                const url = `https://api.rawg.io/api/games?search=${searchTerm}&key=d4f7aa0a2d0a468bab12017d96f97cf1&page=1&platforms=18%2C1%2C7`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const objJson = await response.json();
                setData(objJson.results);
                console.log(objJson);
            
                const genreData = {};
                objJson.results.forEach((game) => {
                    game.genres.forEach((genre) => {
                        if (!genreData[genre.name]) {
                            genreData[genre.name] = [];
                        }
                        genreData[genre.name].push(game);
                    });
                });

                const sortedGenres = Object.keys(genreData).sort();
                const sortedGenreData = {};
                sortedGenres.forEach((genre) => {
                    sortedGenreData[genre] = genreData[genre];
                });
                setGenres(sortedGenreData);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Define loading como false após a conclusão da busca de dados, seja com sucesso ou erro
            }
        };
        fetchApi()
    }, [searchTerm])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id == obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id != obj.id)
            setCart(arrFilter)
            setItem('glibrary', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('glibrary', [...cart, obj])
        }
    }

    const Separator = () => {
        return (
            <div className='separator'></div>
        );
    };
    
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    

    return (
        <div className='StorePage'>
             <Header toggleMenu={toggleMenu} menuAberto={menuAberto} />
            <Separator />
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search for games..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={() => setSearchTerm('')}>Clear</button>
            </div>
            <Separator />
            <div>
                {loading ? (
                    <div className="Loading">Loading... <CgSearchLoading /></div> 
                ) : (
                    <div className="GamesArea">
                        {data.map((e) => (
                            <div className="card" key={e.id}>
                                <h4>{e.name}</h4>
                                <Link to={`/gamepage/${e.id}`}>
                                    <img src={e.background_image} alt={e.name} />
                                </Link>
                                <h4><FaRegStar />{e.rating}</h4>
                                <div className="platforms-container">
                                    {e.platforms.map((platform, index) => (
                                        <div className="platforms" key={index}>
                                            {platform.platform.id == 1 && <FaXbox />}
                                            {platform.platform.id == 4 && <FaComputer />}
                                            {platform.platform.id == 14 && <FaXbox />}
                                            {platform.platform.id == 16 && <FaPlaystation />}
                                            {platform.platform.id == 186 && <FaXbox />}
                                            {platform.platform.id == 187 && <FaPlaystation />}
                                            {platform.platform.id == 18 && <FaPlaystation />}
                                        </div>
                                    ))}
                                </div>
                                <button className='buttoncart' onClick={() => handleClick(e)} >
                                    {
                                        cart.some((itemCart) => itemCart.id == e.id) ? (
                                            <MdOutlineLibraryAddCheck />
                                        ) : (
                                            <MdOutlineLibraryAdd />
                                        )
                                    }
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Store

