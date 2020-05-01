import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import Button from "react-bootstrap/Button";

class Party extends Component {
    render() {
        return (
            <div>
              <tr>
                  <td>{this.props.Party.name}</td>
                  <td>{this.props.Party.id}</td>
                </tr>
            </div>
        )
    }
}
Party.propTypes = {
};

export default connect(
    mapStateToProps,
    { logoutUser }
)(Party);
