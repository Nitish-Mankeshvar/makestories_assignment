import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authAction";

class Navbar extends React.Component {
  render() {
    const getNavbar = () => {
      if (this.props.user) {
        if (this.props.user.data) {
          return (
            <ul>
              <Link to="/user">Welcome!</Link>
              <Link onClick={() => this.props.logout()}>Logout</Link>
            </ul>
          );
        } else {
          return (
            <ul>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </ul>
          );
        }
      } else {
        return (
          <ul>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </ul>
        );
      }
    };
    return (
      <header>
        <nav>{getNavbar()}</nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.Auth.GET_USER_SUCCESS,
});

export default connect(mapStateToProps, { logout })(Navbar);
