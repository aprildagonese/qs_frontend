import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Logout from './Logout';
import './Nav.css';

class Nav extends Component {

  addFood = () => {
    this.props.showModal()
  }

  render() {
    return (
      <div className='nav'>
        <h1>Quantified Self</h1>
        <div className="nav-right">
        <button className='add-food'
                onClick={this.addFood}>
                Add Meal
        </button>
        <SearchBar/>
        <Logout logOut={this.props.logOut}/>
        </div>
      </div>
    );
  }
}

export default Nav;
