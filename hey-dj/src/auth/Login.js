import React, {Component} from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import Button from "react-bootstrap/esm/Button";
import CreateAccount from '../CreateAccount';
import "../Stylesheets/login.css";
import App from '../App';
import Logo from '../Images/HeyDJLogoWhite.png';
import Dashboard from '../Dashboard';
class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
            document.getElementById("errorTxt").innerText="Incorrect username or password";
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter

        console.log(userData);
    };

    render() {
        return (
              <div className="Full-width">
                  <div className= "Logo-container justify-content-center">
                    <img className= "Logo-img" src={Logo}/>
                  </div>
                  <hr className= "mbm Full-width" color = "#1B998B"></hr>
                  <div className="container Login-body Screen-format my-3">

                    <form className ="justify-content-center" onSubmit = {this.onSubmit}>
                        <div className="mbm" >
                            <input
                              type="Email"
                              id="email"
                              className="form-control Login-text"
                              placeholder="Enter Email"
                              onChange ={this.onChange}
                              value={this.state.email}
                              error={this.state.errors.email}
                            />
                        </div>
                        <div className="mbm">
                            <input
                                type="Password"
                                id="password"
                                className="form-control Login-text"
                                placeholder="Enter Password"
                                onChange ={this.onChange}
                                value={this.state.password}
                                error={this.state.errors.password}
                              />
                        </div>

                        <div className="d-flex justify-content-center my-3">
                            <button type="submit" className="Login-button">Login</button>
                        </div>
                        <label className="errorTxt" id = "errorTxt">
                        </label>
                    </form>

                    <hr className= "mtm" color = "#1B998B"></hr>
                    <div className = "d-flex justify-content-center mbs">
                    <button
                      href="www.google.com"
                      className = "Spotify-btn"
                    >
                    <span> <i className="fa fab fa-spotify Spotify-icon"> </i> </span>
                        Continue with Spotify
                    </button>
                    </div>
                    <div className ="d-flex justify-content-center">
                        <p> Don't have an account?
                          <Link to = "/register"  className = "Login-link"> Create One Here!</Link>
                        </p>
                    </div>
                </div>
              </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
