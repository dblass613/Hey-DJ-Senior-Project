import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/bootstrap.css';
import './stylesheets/custom.css';


function CreateAccount() {
  return (
    <div class="my-auto">
        <div class="d-flex justify-content-center my-3 form-group">
            <h1>Create an Account</h1>
        </div>
        <form>
            <div class="my-3 form-group">
                <label>Username</label>
                <input type="text" name="" class="form-control" value="" placeholder="username"/>
            </div>
            <div class="my-3 form-group">
                <label>Password</label>
                <input type="password" name="" class="form-control" value="" placeholder="password"/>
            </div>
            <div class="my-3 form-group">
                <label>First Name</label>
                <input type="text" name="" class="form-control" value="" placeholder="John"/>
            </div>
            <div class="my-3 form-group">
                <label>Last Name</label>
                <input type="password" name="" class="form-control" value="" placeholder="Doe"/>
            </div>
            <div class="d-flex justify-content-center my-3 form-group">
                <button type="button" name="" class="btn">Create Account</button>
            </div>
        </form>
    </div>
  );
}

export default CreateAccount;
