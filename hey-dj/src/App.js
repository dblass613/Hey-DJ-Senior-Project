import React from 'react';
import './Stylesheets/bootstrap.css';
import './Stylesheets/App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login}>
          </Route>
          <Route path="/create" component={CreateAccount}>
          </Route>
          <Route path="/dashboard" component={Dashboard}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
