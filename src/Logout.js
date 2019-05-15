import React, { Component } from 'react';

class Logout extends Component {

  logOut = async () => {
    this.props.logOut()
  }

  render() {
    return(
      <button className='meal'
              onClick={this.logOut}>
        Log Out
      </button>
    )
  }
}

export default Logout;
