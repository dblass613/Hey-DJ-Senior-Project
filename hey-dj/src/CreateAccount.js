import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/createAccount.css';
import Logo from './Images/HeyDJLogoWhite.png';

const CreateAccount = () =>
    <div className="container d-flex align-items-center flex-column">
        <img className="logo-img my-3" src={Logo} />
        <h1 className="mb-5">Create an Account</h1>
        <form className="d-flex flex-column align-items-center">
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="First Name" />
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Last Name" />
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Email" />
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Username" />
            <input type="password" name="" className="form-control create-account-text mb-4" placeholder="Password" />
            <button type="button" name="" className="create-account-button my-4">Create Account</button>
        </form>
    </div>
export default CreateAccount;
