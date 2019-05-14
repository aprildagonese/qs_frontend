import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super()
  }

  addFood = () => {
    this.props.showModal()
  }

  render() {
    return (
      <div className='nav'>
        <h1>Quantified Self</h1>
        <button className='add-food'
                onClick={this.addFood}>
                Add Food
        </button>
        <Modal closeModal={this.hideModal}
               showModal={this.state.showModal}
               type="login"
               user={this.state.currentUserKey}/>
      </div>
    );
  }
}

export default Nav;
