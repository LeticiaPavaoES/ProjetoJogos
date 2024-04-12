import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/logins.css'
import { MdLibraryBooks } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl";
import { FaUser } from 'react-icons/fa'
import '../pages/store'
import Header from '../components/header'

 
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [menuAberto, setMenuAberto] = useState(false);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                username,
                password
            })
            console.log('Login bem-sucedido:', response.data)
        } catch (error) {
            console.error('Erro de login:', error.response.data)
            setError('Credenciais inválidas. Por favor, tente novamente.');
        }
    }

    const Separator = () => {
        return (
            <div className='separator'></div>
        );
    };

    const toggleMenu = () => {
        setMenuAberto(!menuAberto)  
    };


    return (
        <div className="loginpage">
            <Separator />
            <div className="wrapper">
                <h1>Login</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            name="usuario"
                            type="text"
                            id="usuario"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            name="senha"
                            type="password"
                            id="senha"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account?<Link to="/cadastro">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default Login