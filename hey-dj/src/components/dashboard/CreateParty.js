import React, {Component} from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import Button from "react-bootstrap/Button";
import '../../Stylesheets/dashboard.css';
import Logo from '../../Images/HeyDJLogoWhite.png';

class CreateParty extends Component {
  onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
  };
  render(){
    const { user } = this.props.auth;
    return(
      <div class="container d-flex align-items-center flex-column page-format">
      <div className= "Logo-container">
        <img className= "Logo-img" src={Logo}/>
      </div>
      <hr className= "mbm Full-width" color = "#1B998B"></hr>
      <div className="container d-flex align-items-center flex-column">
          <h1 className="mb-5">Join a Party</h1>
          <form className="d-flex flex-column align-items-center">
              <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party Name" />
              <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party End Date" />
              <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party ID" />
              <button type="button" name="" className="create-account-button my-4">
              <a href="/dashboard">Create Party! </a></button>
          </form>
      </div>
      </div>
    )
  }
}
CreateParty.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(CreateParty);
