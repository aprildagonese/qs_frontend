import React, { Component } from 'react';
import AddMealForm from './AddMealForm';
import './foodShow.css'

class FoodShow extends Component {
  constructor() {
    super()
    this.state = {
      hover: false
    }
  }

  render() {
    return(
      <>
      { this.props.food &&
        <div className="food-show">
          <h4 className="food-show-title">{this.props.food.name} | Calories: {this.props.food.calories} </h4>
          <span className="food-show-middle">
            <div className="add-meal-box">
              <AddMealForm food={this.props.food.name}
                           userKey={this.props.userKey}
                           getMeals={this.props.getMeals}
                           closeModal={this.props.closeModal}/>
            </div>
            <div className="recipes-list">
              <h4 className="recipes-title">Recipes</h4>
              {this.props.recipes && this.props.recipes.recipes.map(recipe => {
                return <a onClick={() =>  window.open(recipe.recipe_url, "_blank")}
                href={recipe.url}
                rel="noopener noreferrer"
                target="_blank"
                className="recipes-list"
                style={{cursor: 'pointer'}}>
                {recipe.label}<br/>
                </a>
              })}
            </div>
          </span>
        </div>
      }
      </>
    )
  }
}

export default FoodShow;
