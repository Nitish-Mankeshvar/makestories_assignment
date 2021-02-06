import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import "../styles/SignUp.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { login } from "../redux/actions/authAction";

const { Title } = Typography;

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      message.error("please fill all the fields");
      return;
    }
    try {
      const res = await this.props.login(this.state);
      if (this.props.user.data) {
        message.success("logged in successfully");
        this.props.history.push("/user");
      }
      if (this.props.error) {
        message.error("user not found");
      }
    } catch (error) {
      message.error("wrong email id or password");
    }
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="left">
            <div className="header">
              <h2 className="animation a1">Welcome!</h2>
              <h4 className="animation a2">Log in to see your details</h4>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)} className="form">
              <input
                type="email"
                className="form-field animation a3"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <button type="submit" className="animation a6">
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.Auth.GET_USER_SUCCESS,
    error: state.Auth.GET_USER_ERROR,
  };
};

export default connect(mapStateToProps, { login })(withRouter(Login));
