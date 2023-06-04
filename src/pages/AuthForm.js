import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = () => {
    const { username, password } = this.state;

    axios
      .post(API_URL + "users", { username, password })
      .then((res) => {
        console.log("Sign up success!");
        // Add any success handling or redirection logic here
      })
      .catch((error) => {
        console.log("Sign up failed. Error:", error);
        this.setState({ error: "Sign up failed. Please try again." });
      });
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <div>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        {error && <p>{error}</p>}
        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    );
  }
}
