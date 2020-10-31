import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi'
import "../styles/pages/login.css"


function Login() {


  return (
    <div id="login-page">
      <form className="content-wrapper">
        <h1>Login</h1>
        <div className="content-input-wrapper">
          <FiMail className="inputText-image"/><input className="inputText-login" name="email" type="text" placeholder="Email" />
        </div>
        <div className="content-input-wrapper">
          <FiLock className="inputText-image"/><input className="inputText-login" name="password" type="password" placeholder="Password" />
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