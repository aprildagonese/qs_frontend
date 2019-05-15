import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Logout from './Logout';
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
        <h1>quantifiedSelf</h1>
        <div className="nav-right">
          <SearchBar fetchMeals={this.props.fetchMeals}
                     userKey={this.props.userKey}/>
          <button className='add-food'
                  onClick={this.addFood}>
                  Add Meal
          </button>
          <Logout logOut={this.props.logOut}/>
        </div>
      </div>
    );
  }
}

export default Nav;
