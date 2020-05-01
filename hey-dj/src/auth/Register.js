import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../actions/authActions";
import ReactDOM from 'react-dom';
import '../Stylesheets/bootstrap.css';
import '../Stylesheets/createAccount.css';
import Logo from "../Images/HeyDJLogoWhite.png";

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
            console.log(nextProps.errors);
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

          <div className = "body-wrapper">
              <div className="d-flex justify-content-center my-3">
                <div className= "Logo-container">
                  <img className= "Logo-img" src={Logo}/>
                </div>
              </div>
              <hr className= "mbm" color = "#1B998B"></hr>
              <div className="CreateAccount-form-container">
                <div className="d-flex justify-content-center my-3 form-group">
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={this.onSubmit}>

                  <div className="my-3 form-group">
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
                  <div className="my-3 form-group">
                  <input type="email"
                         className="form-control"
                         placeholder="Enter email"
                         onChange={this.onChange}
                         value={this.state.email}
                         error={this.state.errors.email}
                         id="email"
                  />                  </div>
                  <div className="my-3 form-group">
                      <input type="password"
                             className="form-control"
                             placeholder="Enter password"
                             onChange={this.onChange}
                             value={this.state.password}
                             error={this.state.errors.password}
                             id="password"
                      />
                  </div>
                  <div className="my-3 form-group">
                    <input type="password"
                           className="form-control"
                           placeholder="Re-Enter password"
                           onChange={this.onChange}
                           value={this.state.password2}
                           error={this.state.errors.password2}
                           id="password2"
                    />
                  </div>
                  <div className="d-flex justify-content-center my-3 form-group">
                      <button type="submit" className="SignUp-button">Sign Up</button>
                  </div>
                  <p className="forgot-password text-right">
                      Already registered <a href="/">sign in?</a>
                  </p>
                  <label className="errorTxt" id = "errorTxt">
                  </label>
              </form>
            </div>
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
