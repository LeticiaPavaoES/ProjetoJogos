import React, { useState } from 'react'
import axios from 'axios'
 
const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        username,
        password,
        email,
      });
      setSuccess(response.data.message);
      setError("");
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
      setSuccess("");
    }
  };
 
  return (
    <div>
      <div className="wrapper">
        <h1>Cadastro</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
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
}
 
export default Cadastro