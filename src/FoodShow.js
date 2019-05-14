import React, { Component } from 'react';

class FoodShow extends Component {
  constructor() {
    super()
    this.state = {
      hover: false
    }
  }

  render() {
    return(
      <div>
      { this.props.food &&
        <>
          <h3>{this.props.food.name}</h3>
          <h4>Calories: {this.props.food.calories}</h4>
          <h4>Recipes</h4>
          {this.props.recipes && this.props.recipes.recipes.map(recipe => {
            return <a onClick={() =>  window.open(recipe.recipe_url, "_blank")}
                      href={recipe.url}
                      target="_blank">
              {recipe.label}<br/>
            </a>
          })}
        </>
      }
      </div>
    )
  }
}

export default FoodShow;
