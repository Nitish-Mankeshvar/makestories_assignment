import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class AuthGuard extends React.Component {
  render() {
    return this.props.user ? this.props.children : <Redirect to="/login" />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.Auth.GET_USER_SUCCESS,
  };
};

export default connect(mapStateToProps, null)(AuthGuard);
