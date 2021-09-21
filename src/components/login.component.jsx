import React, { Component } from "react";
import Input from "../common/input.component";

export default class Login extends Component {
  state = {
    user: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    console.log(userName, password);
  };

  handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;

    const updatedUser = { ...this.state.user };
    updatedUser[name] = value;

    this.setState({ user: updatedUser });
  };

  render() {
    const { username, password } = this.state.user;
    return (
      <div className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <Input
              label=" User Name"
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Password"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
