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
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/cart"><h3>Favorites</h3></Link>
                <Link to="/plataformas"><h3>Platforms</h3></Link>
                <Link to="/categorias"><h3>Categories</h3></Link>
                <Link to="/avaliacoes"><h3>Reviews</h3></Link>
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
