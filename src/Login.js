import React, { Component } from 'react';
import { logInUser } from './services/calories'
import { registerUser } from './services/calories'

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
        <form>
           <input type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Email address"
                  onChange={this.changeHandler} />
           <input type="text"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.changeHandler} />
           <input type="text"
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  placeholder="Confirm Password"
                  onChange={this.changeHandler} />
           <input type="button"
                  name="submit"
                  value="Log In"
                  onClick={this.logIn} />
           <input type="button"
                  name="submit"
                  value="Register"
                  onClick={this.register} />
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
