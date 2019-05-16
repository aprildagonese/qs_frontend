import React, { Component } from 'react';
import Modal from './Modal';
import { deleteFood } from './services/calories'
import { fetchRecipes } from './services/recipes'

class Food extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      hover: false,
      recipes: null
    }
  }

  getRecipes = async () => {
    const recipes = await fetchRecipes(this.props.data.name);
    this.setState({
      recipes: recipes
    })
    return this.state.recipes;
  }

  deleteRecord = () => {
    const userID = this.props.userID;
    const mealID = this.props.mealID;
    const foodID = this.props.data.id;
    deleteFood(userID, mealID, foodID);
  }

  hideModal = () => {
    this.props.getMeals()
    this.setState({ showModal: false });
  };

  showFood = () => {
    this.getRecipes()
    this.setState({ showModal: true });
  }

  hoverOn = () => {
    this.setState({ hover: true })
  }

  hoverOff = () => {
    this.setState({ hover: false })
  }

  render() {
    return(
    <div className="meal-food">
      <a className={this.state.hover ? 'food-name-on' : 'food-name-off'}
         onClick={this.showFood}
         onMouseEnter={this.hoverOn}
         onMouseLeave={this.hoverOff}>
        {this.props.data.name}
      </a>
      , {this.props.data.calories} calories
      <button id='delete-food'
              onClick={this.deleteRecord}>
        X
      </button>
      <Modal closeModal={this.hideModal}
             showModal={this.state.showModal}
             userKey={this.props.userKey}
             type="foodShow"
             food={this.props.data}
             recipes={this.state.recipes}/>
    </div>
  )}
}

export default Food;
