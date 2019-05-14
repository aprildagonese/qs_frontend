import React, { Component } from 'react';
import { deleteFood } from './services/calories'

class Food extends Component {
  constructor() {
    super()
  }

  deleteRecord = () => {
    const userID = this.props.userID;
    const mealID = this.props.mealID;
    const foodID = this.props.data.id;
    // deleteFood(userID, mealID, foodID);
    console.log(userID, mealID, foodID);
  }

  render() {
    return(
    <div>
      <li>{this.props.data.name}, {this.props.data.calories} calories</li>
      <button className='delete-food'
              onClick={this.deleteRecord}>
              X
      </button>
    </div>
  )}
}

export default Food;
