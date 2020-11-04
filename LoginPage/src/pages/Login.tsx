import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi'
import "../styles/pages/login.css"
import api from '../services/api';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginSubmit(event: FormEvent){
    event.preventDefault();

    const dataLogin = {
      "email": email,
      "password": password
    }

    await api.post('users/signin', dataLogin).then((resp) => {
    console.log(resp.data.token)
    sessionStorage.setItem('auth', resp.data.token)
    alert('logado com sucesso')
  }).catch( error => {
    console.log(error)
    alert('Email ou Senha inválidos.')
  })

    
  }


  return (
    <div id="login-page">
      <form className="content-wrapper" onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <div className="content-input-wrapper">
          <FiMail className="inputText-image"/>
          <input className="inputText-login" name="email" type="text" placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="content-input-wrapper">
          <FiLock className="inputText-image"/>
          <input 
          className="inputText-login" 
          name="password" 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
           />
        </div>
        <label className="checkbox-login">
          <input
            name="rememberMe"
            type="checkbox" />
            <span>Remember me</span>
        </label>

        <button className="submit-login" type="submit">
          Login
        </button>
        <p className="NotAMember-login">Not a member? <Link to="/signup" className="signup-button">Sign up now</Link> </p>
      </form>
    </div>
  )
}

export default Login