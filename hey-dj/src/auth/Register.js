import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../actions/authActions";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);

        console.log(newUser);
    };

    render() {
        return (

            <div style={{paddingTop:'100px'}}>

            <Row >
                <Col></Col>
                <Col md={6}>
                    <Card>
                        <div className="padded">
                            <form onSubmit={this.onSubmit}>
                                <h3 align="center">Sign Up</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={this.state.errors.name}
                                        id="name"

                                    />
                                </div>

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

                                <div className="form-group">
                                    <label>Re-Enter Password</label>
                                    <input type="password"
                                           className="form-control"
                                           placeholder="Enter password"
                                           onChange={this.onChange}
                                           value={this.state.password2}
                                           error={this.state.errors.password2}
                                           id="password2"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                <p className="forgot-password text-right">
                                    Already registered <a href="#">sign in?</a>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
