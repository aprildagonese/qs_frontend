import React, { Component } from 'react';

class Nav extends Component {
  constructor() {
    super()
  }

  addFood = () => {
    console.log('FOOD')
  }

  render() {
    return (
      <div className='nav'>
        <h1>Quantified Self</h1>
        <button className='add-food'
                onClick={this.addFood}>
                Add Food
        </button>
      </div>
    );
  }
}

export default Nav;
