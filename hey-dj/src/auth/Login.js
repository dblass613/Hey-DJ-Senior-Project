import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import Button from "react-bootstrap/esm/Button";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateAccount from '../CreateAccount';
import '../Stylesheets/login.css';
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

          <div className = "login-body">
              <div className="container d-flex justify-content-center h-100">
                <div className="my-auto">
                    <div className="d-flex justify-content-center my-3">
                      <div className= "Logo-container">
                        <img className= "Logo-img" src={Logo}/>
                      </div>
                    </div>

                    <hr className= "mbm" color = "#1B998B"></hr>

                    <form onSubmit = {this.onSubmit}>
                        <div className="mbm" >
                            <input
                              type="Email"
                              id="email"
                              className="form-control Login-text"
                              placeholder="Enter Email"/>
                              value={this.state.email}
                              error={this.state.errors.email}
                        </div>
                        <div className="mbm">
                            <input type="Password" name="passText" className="form-control Login-text" placeholder="Password"/>
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <button type="submit" name="Loginbtn" className="Login-button">Login</button>
                        </div>
                    </form>

                    <hr className= "mtm" color = "#1B998B"></hr>
                    <Button
                        href="http://localhost:5000/callback"
                    >
                        Sign in with Spotify
                    </Button>
                    <div>
                        <p> Don't have an account?
                          <Link to = "/create" className = "Login-link"> Create One Here!</Link>
                        </p>
                    </div>
                </div>
              </div>
            </div>

                            

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password"
                                               className="form-control"
                                               placeholder="Enter password"
                                               onChange={this.onChange}
                                               value={this.state.password}
                                               error={this.state.errors.password}
                                               id="password"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    <p className="forgot-password text-right">
                                        Already registered <a href="/login">sign in?</a>
                                    </p>
                                </form>
                            </div>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>

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
