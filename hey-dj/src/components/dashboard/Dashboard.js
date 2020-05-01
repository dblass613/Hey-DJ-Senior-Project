import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Button variant="primary"
                  size="lg"
                  onClick={this.onLogoutClick}>Logout
                </Button>
            <div class="container">
                    <div class="row justify-content-center my-3">
                        <div class="col d-flex justify-content-center">
                            <button class="btn" name="">Host a Party</button>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <button class="btn" name="">Join a Party</button>
                        </div>
                    </div>
                    <div class="row justify-content-center my-3">
                        <h1>My Parties</h1>
                    </div>
                    <div class="row justify-content-center my-3">
                        <div class="table-responsive">
                            <div class="col my-3">
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
                        </div>
                    </div>
                    <div class="row justify-content-center my-3">
                        <h1>Joined Parties</h1>
                    </div>
                    <div class="row justify-content-center my-3">
                        <div class="table-responsive">
                            <div class="col my-3">
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
                        </div>
                    </div>
                </div>
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
