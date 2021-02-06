import React, { Component } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import "../styles/SignUp.css";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/authAction";
import { withRouter } from "react-router";

const { Title } = Typography;

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "",
    address: "",
    file: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, age, phoneNumber, address } = this.state;
    console.log(this.props);
    if (!username || !email || !password || !age || !phoneNumber || !address) {
      message.error("Please fill all the fields");
      return;
    }
    try {
      message.loading("Making you account..");
      const response = await this.props.signUp(this.state);
      console.log(response);
      message.destroy();
      message.success("Made your account! you can now login");
      this.props.history.push("/login");
    } catch (error) {
      message.error("Server error");
      console.log(error);
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
              <h2 className="animation a1">Make your account!</h2>
              <h4 className="animation a2">let's start your journey</h4>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)} className="form">
              <input
                type="text"
                className="form-field animation a4"
                placeholder="username"
                name="username"
                value={this.state.username}
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
              <input
                type="text"
                className="form-field animation a4"
                placeholder="age"
                name="age"
                value={this.state.age}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <input
                type="text"
                className="form-field animation a4"
                placeholder="phone number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <input
                type="email"
                className="form-field animation a3"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <input
                type="text"
                className="form-field animation a3"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <label className="animation a3">Profile picture</label>
              <input
                type="file"
                className="form-field animation a3"
                placeholder="Your Image"
                name="file"
                value={this.state.file}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <button className="animation a6">SIGN UP</button>
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
    hi: "hi",
  };
};

export default connect(mapStateToProps, { signUp })(withRouter(SignUp));
