import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/bootstrap.css';
import './Stylesheets/createAccount.css';
import Logo from './Images/HeyDJLogoWhite.png';

const CreateAccount = () =>
      <div className = "body-wrapper">
          <div className="d-flex justify-content-center my-3">
            <div className= "Logo-container">
              <img className= "Logo-img" src={Logo}/>
            </div>
          </div>
          <hr className= "mbm" color = "#1B998B"></hr>
          <div class="CreateAccount-form-container">
            <div class="d-flex justify-content-center my-3 form-group">
                <h1>Create an Account</h1>
            </div>
            <form>
              <div class="my-3 form-group">
                  <input type="text" name="" class="form-control" value="" placeholder="First Name"/>
              </div>
              <div class="my-3 form-group">
                  <input type="password" name="" class="form-control" value="" placeholder="Last Name"/>
              </div>
              <div class="my-3 form-group">
                  <input type="text" name="" class="form-control" value="" placeholder="Email"/>
              </div>
              <div class="my-3 form-group">
                  <input type="text" name="" class="form-control" value="" placeholder="Username"/>
              </div>
              <div class="my-3 form-group">
                  <input type="password" name="" class="form-control" value="" placeholder="Password"/>
              </div>
              <div class="d-flex justify-content-center my-3 form-group">
                  <button type="button" name="" class="btn">Create Account</button>
              </div>
          </form>
        </div>
    </div>
export default CreateAccount;
