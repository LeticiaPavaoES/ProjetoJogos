import React, { useState } from 'react';
import axios from 'axios';
import { SlOptionsVertical } from 'react-icons/sl';
import { MdLibraryBooks } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/logins.css';
import Header from '../components/header';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/register', {
        username,
        password,
        email,
      });
      setSuccess(response.data.message);
      setError('');
      setUsername('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
      setSuccess('');
      setError('Erro ao processar o cadastro. Por favor, tente novamente mais tarde.');
    }
  };

  const Separator = () => {
    return <div className="separator"></div>;
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="loginpage">
      <Separator />
      <div className="wrapper">
        <h1>Cadastro</h1>
        {error && <p style={{ color: 'pink' }}>{error}</p>}
        {success && <p style={{ color: 'lilac' }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
