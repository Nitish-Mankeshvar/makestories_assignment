import React, { Component } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import "../styles/SignUp.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongodb";
import { signUp, uploadProfilePhoto } from "../redux/actions/authAction";
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
    photofile: null,
  };

  handleFileUpload = (photofile) => {
    const data = new FormData();
    data.append("file", photofile, photofile.name);
    return data;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      age,
      phoneNumber,
      address,
      photofile,
    } = this.state;
    console.log(this.props);
    if (
      !username ||
      !email ||
      !password ||
      !age ||
      !phoneNumber ||
      !address ||
      !photofile
    ) {
      message.error("Please fill all the fields and upload profile photo");
      return;
    }
    try {
      message.loading("Making you account..");
      await this.props.signUp(this.state);
      message.destroy();

      if (this.props.createdUser) {
        console.log(this.props.createdUser.data._id);
        if (photofile) {
          let data = this.handleFileUpload(photofile);
          await this.props.uploadProfilePhoto(
            this.props.createdUser.data._id,
            data
          );
          console.log(this.props);
          message.success("Made your account! you can now login");
          this.props.history.push("/login");
        }
      }
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

  onFileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
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
                name="photofile"
                onChange={(e) => this.onFileChange(e)}
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
    createdUser: state.Auth.CREATE_USER_SUCCESS,
    uploadedPhoto: state.Auth.UPLOAD_PHOTO_SUCCESS,
    uploadError: state.Auth.UPLOAD_PHOTO_ERROR,
  };
};

export default connect(mapStateToProps, { signUp, uploadProfilePhoto })(
  withRouter(SignUp)
);
