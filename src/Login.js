import React, { Component } from 'react';
import { logInUser } from './services/calories'
import { registerUser } from './services/calories'
import './form.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      loginKey: null
    }
  };

  setUser = (key) => {
    this.props.setUser(key)
  }

  logIn = async () => {
    const email = this.state.email
    const password = this.state.password
    const passwordConfirmation = this.state.passwordConfirmation
    const key = await logInUser(email, password, passwordConfirmation)
    this.setUser(key)
  }

  register = async () => {
    const email = this.state.email
    const password = this.state.password
    const passwordConfirmation = this.state.passwordConfirmation
    const key = await registerUser(email, password, passwordConfirmation)
    this.setUser(key)
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <>
        <div className="landing-title">quantifiedSelf</div>
        <form className="form login">
           <input type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Email address"
                  onChange={this.changeHandler}
                  className="form-input" />
           <input type="text"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.changeHandler}
                  className="form-input" />
           <input type="text"
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  placeholder="Confirm Password"
                  onChange={this.changeHandler}
                  className="form-input" />
           <div className="form-buttons">
             <input type="button"
                    name="submit"
                    value="Log In"
                    onClick={this.logIn}
                    className="button form-button" />
             <input type="button"
                    name="submit"
                    value="Register"
                    onClick={this.register}
                    className="button form-button" />
           </div>
        </form>
        {this.props.error &&
          <div className="error">
            {this.props.error}
          </div>
        }
      </>
    )
  }
}

export default Login;
