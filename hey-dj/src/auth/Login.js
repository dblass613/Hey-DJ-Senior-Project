import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import Button from "react-bootstrap/esm/Button";

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

            <div style={{paddingTop:'100px'}}>


                <Button
                    href="http://localhost:5000/callback"
                >
                    Sign in with Spotify
                </Button>
                <Row >
                    <Col></Col>
                    <Col md={5}>
                        <Card>
                            <div>
                                <form onSubmit={this.onSubmit}>
                                    <h3 align="center">Login</h3>


                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email"
                                               className="form-control"
                                               placeholder="Enter email"
                                               onChange={this.onChange}
                                               value={this.state.email}
                                               error={this.state.errors.email}
                                               id="email"
                                        />
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