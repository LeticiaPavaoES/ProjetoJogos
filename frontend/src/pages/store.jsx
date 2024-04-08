import React, { useState, useEffect } from 'react'
import '../css/game.css'
import { FaUser } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

const Separator = () => {
    return (
        <div className='separator'></div>
    );
};

export const Store = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.rawg.io/api/games?search=${searchTerm}&key=d4f7aa0a2d0a468bab12017d96f97cf1&page=1&platforms=18%2C1%2C7`;
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
            console.log(objJson);
        };
        fetchApi()
    }, [searchTerm])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className='StorePage'>
            <div className='Guia'>
                <h1>Start Games</h1>
                <div className='user'>
                    <Link to="/login">
                        <FaUser />
                    </Link>
                </div>
            </div>
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
            <div className="GamesArea">
                {data.map((e) => (
                    <div className="card" key={e.id}>
                         <Link to={`/gamepage/${e.id}`}>
                        <img src={e.background_image} alt={e.name} />
                        </Link>
                        <h4>{e.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Store

/*import React, { useState, useEffect } from 'react';
import '../css/game.css';
import { FaUser } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const Separator = () => {
    return (
        <div className='separator'></div>
    );
};

export const Store = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.rawg.io/api/games?search=${searchTerm}&key=d4f7aa0a2d0a468bab12017d96f97cf1&page=1&platforms=18%2C1%2C7`;
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
            console.log(objJson);
        };
        fetchApi();
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const Logar = ({history}) => (
        <Fragment>
          <h1>Contact</h1>
          <button onClick={() => history.push('/') }></button>
          <FakeText />
        </Fragment>
        );

    return (
        <div className='StorePage'>
            <div className='Guia'>
                <h1>Start Games</h1>
                <div className='user'>
                    <Logar>
                        <FaUser />
                    </Logar>
                </div>
            </div>
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
            <div className="GamesArea">
                {data.map((e) => (
                    <div className="card" key={e.id}>
                    
                            <img src={e.background_image} alt={e.name} />
                        
                        <h4>{e.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;*/