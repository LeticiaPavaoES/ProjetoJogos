import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/novos-jogos">Novos Jogos</Link></li>
                <li><Link to="/generos">Gêneros</Link></li>
                <li><Link to="/plataformas">Plataformas</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;