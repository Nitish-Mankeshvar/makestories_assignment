import React, { Component } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import "../styles/SignUp.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateUser, getGamer } from "../redux/actions/authAction";

const { Title } = Typography;

class EditUser extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "",
    address: "",
  };

  async componentDidMount() {
    await this.props.getGamer(this.props.userDetails.data._id);
    if (this.props.gamerDetails) {
      this.setState({
        username: this.props.gamerDetails.data.username,
        email: this.props.gamerDetails.data.email,
        password: this.props.gamerDetails.data.password,
        age: this.props.gamerDetails.data.age,
        phoneNumber: this.props.gamerDetails.data.phoneNumber,
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, age, phoneNumber, address } = this.state;
    console.log(this.props);
    if (!username || !email || !password || !age || !phoneNumber || !address) {
      message.error("Please fill all the fields");
      return;
    }
    try {
      const id = this.props.match.params.id;
      await this.props.updateUser(id, this.state);
      message.success("updated successfully!");
      this.props.history.push("/user");
    } catch (error) {
      message.error("something went wrong");
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
              <h2 className="animation a1">Update your account</h2>
              <h4 className="animation a2">
                Changes will be seen once you click on update.
              </h4>
            </div>
            <form
              encType="multipart/formdata"
              onSubmit={(e) => this.handleSubmit(e)}
              className="form"
            >
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
              <button type="submit" className="animation a6">
                UPDATE USER
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
    userDetails: state.Auth.GET_USER_SUCCESS,
    gamerDetails: state.Auth.GET_GAMER,
  };
};

export default connect(mapStateToProps, { updateUser, getGamer })(
  withRouter(EditUser)
);
