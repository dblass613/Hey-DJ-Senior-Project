import React, {Component} from 'react';
import NavigationBar from "./components/NavigationBar";
import Register from "./auth/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./auth/Login";
import {Provider} from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {logoutUser, setCurrentUser} from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/Profile";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
    }
}


class App extends Component {

 render() {

     return(
         <Provider store={store}>
             <Router>
                     <NavigationBar/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/login" component={Login}/>
                     <Route exact path="/profile" component={Profile}/>

                     <Switch>
                         <PrivateRoute exact path="/dashboard" component={Dashboard} />
                     </Switch>
             </Router>
         </Provider>
     )
 }
}

export default App;