import React, { Component } from 'react';

class Meal extends Component {

  setCurrentFoods = () => {
    this.props.setCurrentFoods(this.props.foods, this.props.name, this.props.mealID)
  }

  render() {
    return(
      <button className='meal'
              onClick={this.setCurrentFoods}>
        {this.props.name}
      </button>
    )
  }
}

export default Meal;
