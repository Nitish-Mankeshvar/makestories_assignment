import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../styles/ProfileCard.css";

import { getGamer } from "../redux/actions/authAction";

class LoggedUser extends React.Component {
  state = {
    userDetails: null,
  };
  async componentDidMount() {
    const response = await this.props.getGamer(this.props.userDetails.data._id);
    console.log(response);
    if (this.props.gamerDetails) {
      this.setState({
        userDetails: this.props.gamerDetails,
      });
    }
  }
  handleClick = () => {
    this.props.history.push(`/edituser/${this.state.userDetails.data._id}`);
  };

  callCard() {
    return (
      <div className="container">
        <div className="profile">
          <div className="image"></div>
          <h2>{this.state.userDetails.data.username}</h2>
          <hr />
          <div style={{ marginTop: "4rem" }}>
            <p>
              <strong>Email</strong>: {this.state.userDetails.data.email}
            </p>
            <p>
              <strong>Age</strong>: {this.state.userDetails.data.age}
            </p>
            <p>
              <strong>Phone Number</strong>:{" "}
              {this.state.userDetails.data.phoneNumber}
            </p>
            <p>
              <strong>Address</strong>: {this.state.userDetails.data.address}
            </p>
          </div>
          <button onClick={this.handleClick}>Edit User</button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.userDetails ? this.callCard() : <p>Loading</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userDetails: state.Auth.GET_USER_SUCCESS,
    gamerDetails: state.Auth.GET_GAMER,
  };
};

export default connect(mapStateToProps, { getGamer })(withRouter(LoggedUser));
