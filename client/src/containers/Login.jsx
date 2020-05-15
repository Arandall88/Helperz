import React, { Component } from "react";
import axios from "axios";
// import { response } from "express";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "Invalid UserName and Password",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/users", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push(`/dashboard/${response.data.data._id}`);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="container">
        {this.state.error && (
          <div
            className="row"
            id="login-alert"
            style={{ backgroundColor: "#B24C63", paddingTop: 3 }}
          >
            <div className="col" style={{ textAlign: "center", float: "none" }}>
        <p style={{ color: "#FF4C63" }}> {this.state.error}</p>
            </div>
          </div>
        )}
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
