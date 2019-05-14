import React, { Component } from 'react';

class FoodShow extends Component {
  constructor() {
    super()
    this.state = {
      recipes: null
    }
  }

  render() {
    return(
      <div>
        Food Show
        <h3>{this.props.food.name}</h3>
        <h4>Calories: {this.props.food.calories}</h4>
        {this.state.recipes && this.props.recipes.map(recipe => {
          return recipe.label
        })}
      </div>
    )
  }
}

export default FoodShow;
