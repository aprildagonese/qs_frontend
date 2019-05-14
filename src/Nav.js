import React, { Component } from 'react';
import SearchBar from './SearchBar';
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
        <SearchBar/>
      </div>
    );
  }
}

export default Nav;
