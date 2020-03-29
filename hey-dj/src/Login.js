import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import './Stylesheets/login.css';
import App from './App';
import Logo from './Images/HeyDJLogoWhite.png';
import Dashboard from './Dashboard';

const Login = () =>
  <div className = "login-body">
      <div className="container d-flex justify-content-center h-100">
        <div className="my-auto">
            <div className="d-flex justify-content-center my-3">
              <div className= "Logo-container">
                <img className= "Logo-img" src={Logo}/>
              </div>
            </div>
            <hr className= "mbm" color = "#1B998B"></hr>
            <form>
                <div className="mbm" >
                    <input type="text" name="userText" className="form-control Login-text" placeholder="lalalalalalalala"/>
                </div>
                <div className="mbm">
                    <input type="password" name="passText" className="form-control Login-text" placeholder="password"/>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button type="button" name="Loginbtn" className="Login-button" onclick = {Dashboard}>Login</button>
                </div>
            </form>

            <hr className= "mtm" color = "#1B998B"></hr>

            <div>
                <p> Don't have an account?
                  <Link to = "/create" className = "Login-link"> Create One Here!</Link>
                </p>
            </div>
        </div>
      </div>
    </div>


export default Login;
