import React, { Component } from 'react';
import './App.css';

class Login extends Component {

  constructor() {
    this.state = {
      email: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.email, this.state.password).catch(function(err) {
      console.log("Invalid email or password". err);
    });
  }

  render() {
    return (
        <h4>Login</h4>
        <form>
          <label>
            email
            <input type="text" valueLink={this.linkState('user')} placeholder="Email" />
          </label>
          <label>
            Password
            <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
    );
  }
}

export default Login;
