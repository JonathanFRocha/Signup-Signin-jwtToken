import React, { FormEvent, useState } from 'react';
import '../styles/pages/Signup.css';
import { FiMail, FiLock } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import api from '../services/api';


function Signup() {
  const history = useHistory()

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const data = new FormData()

    data.append('fullName', fullName);
    data.append('email', email);
    data.append('password', password)
    alert('cadastro realizado com sucesso')
    await api.post('users', data);

    

    history.push('/')

  }

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-page_wrapper">
        <h1>Sign Up</h1>
        <label>
          Full Name
          <div className="content-input-wrapper">
            <FiMail className="inputText-image" />
            <input className="inputText-signup" 
            type="text" 
            placeholder="Type your fullname" 
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            />
          </div>
        </label>
        <label>
          Email
          <div className="content-input-wrapper">
            <FiMail className="inputText-image" />
            <input className="inputText-signup" 
            type="text" 
            placeholder="Type your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
        </label>
        <label>
          Password
          <div className="content-input-wrapper" >
            <FiLock className="inputText-image" />
            <input className="inputText-signup" 
            type="password" 
            placeholder="Type your password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            />
          </div>
        </label>
        <button className="submit-login" type="submit">
          Sign Up!
        </button>

      </form>
    </div>
  )
}

export default Signup