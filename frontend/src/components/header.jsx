import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import { SlOptionsVertical } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(prevState => !prevState);
    };

    return (
        <header className="header">
            <nav className="Guia">
                <div className="logo">Start Games</div>
                <Link to="/"><h3>Página Inicial</h3></Link>
                <Link to="/cart"><h3>Favoritos</h3></Link>
                <Link to="/plataformas"><h3>Plataformas</h3></Link>
                <Link to="/categorias"><h3>Categorias</h3></Link>
                <Link to="/avaliacoes"><h3>Avaliações</h3></Link>
                <div className="user">
                    <Link to="/login">
                        <FaUser />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
