import React, {Component} from 'react';
//import NavigationBar from "./components/NavigationBar";
import Register from "./auth/Register";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./auth/Login";
import {Provider} from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {logoutUser, setCurrentUser} from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/Profile";
import logo from './logo.svg';
import './Stylesheets/App.css';
import CreateAccount from './auth/Register';
import './Stylesheets/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component = {Login}>
            </Route>
            <Route exact path="/register" component = {Register}>
            </Route>
            <Route exact path="/dashboard" component = {Dashboard}>
            </Route>
          </Switch>
        </BrowserRouter>
        </Provider>
      </header>
      </div>
    )
}

export default App;
