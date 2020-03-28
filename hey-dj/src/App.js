import React from 'react';
import logo from './logo.svg';
import './Stylesheets/App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login'
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component = {Login}>
          </Route>
          <Route path="/create" component = {CreateAccount}>
          </Route>
          <Route path="/dashboard" component = {Dashboard}>
          </Route>
        </Switch>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
