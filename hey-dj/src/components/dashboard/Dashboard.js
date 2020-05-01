import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import Button from "react-bootstrap/Button";
import '../../Stylesheets/dashboard.css';
import Logo from '../../Images/HeyDJLogoWhite.png';

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
          <div class="container d-flex align-items-center flex-column page-format">
          <div className= "Logo-container">
            <img className= "Logo-img" src={Logo}/>
          </div>
          <hr className= "mbm Full-width" color = "#1B998B"></hr>

          <h1 class="my-3 mbm">My Parties</h1>

          <div class="table-responsive my-3">
              <table class="table table-dark table-bordered table-hover">
                  <thead class="thead-light">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Party Name</th>
                          <th scope="col">Date End</th>
                          <th scope="col">Details</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1</td>
                          <td>BDay Party</td>
                          <td>Some Date</td>
                          <td>Details</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Anniversary</td>
                          <td>Some Date</td>
                          <td>Details</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <button className= "CreateParty-button" >
          <a href="/CreateParty">New Party </a></button>

        </div>
        )
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
