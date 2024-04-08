import React, { useState } from 'react'
import axios from 'axios'

const Cadastro = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                username,
                password,
                email
            })
            setSuccess(response.data.message);
            setError('');
            setUsername('');
            setPassword('');
            setEmail('');
        } catch (error) {
            setError(error.response.data.message);
            setSuccess('');
        }
    }

    return (
        <div>
            <h1>Cadastro</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro
