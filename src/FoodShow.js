import React, { Component } from 'react';

class FoodShow extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        Food Show
        <h3>{this.props.food.name}</h3>
        <h4>Calories: {this.props.food.calories}</h4>
      </div>
    )
  }
}

export default FoodShow;
