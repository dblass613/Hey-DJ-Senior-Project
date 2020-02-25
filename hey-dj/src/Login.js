import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import './stylesheets/bootstrap.css';
import './stylesheets/custom.css';



function Login() {
  return (
    <div className="container d-flex justify-content-center h-100">
        <div className="my-auto">
            <div className="d-flex justify-content-center my-3">
                <h1>Hey DJ!</h1>
            </div>
            <form>
                <div className="my-3">
                    <input type="text" name="" className="form-control" placeholder="username"/>
                </div>
                <div className="my-3">
                    <input type="password" name="" className="form-control" placeholder="password"onChange=""/>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button type="button" name="" className="btn">Login</button>
                </div>
            </form>
            <div className="my-3">
                Don't have an account?
              <BrowserRouter>
                <Link to = "/CreateAccount"> Create One Here!</Link>
                <Switch>
                  <Route path = "/createAccount" component={CreateAccount}>
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
        </div>
    </div>
  );
}

export default Login;
