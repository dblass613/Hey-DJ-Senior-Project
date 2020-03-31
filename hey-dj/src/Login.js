import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import './Stylesheets/login.css';
import Logo from './Images/HeyDJLogoWhite.png';
import Dashboard from './Dashboard';

const Login = () =>
  <div className="container d-flex align-items-center flex-column">

    <img className="logo-img my-3" src={Logo} />

    <form className="d-flex flex-column align-items-center">
      <input type="text" name="userText" className="form-control login-text mb-4" placeholder="username" />
      <input type="password" name="passText" className="form-control login-text my-4" placeholder="password" />
      <button type="button" name="Loginbtn" className="login-button my-4" onclick={Dashboard}>Login</button>
    </form>

    <p className="my-3"> Don't have an account?
                  <Link to="/create" className="login-link"> Create One Here!</Link>
    </p>

  </div>

export default Login;