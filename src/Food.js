import React, { Component } from 'react';
import Modal from './Modal';
import { deleteFood } from './services/calories'

class Food extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      hover: false
    }
  }

  deleteRecord = () => {
    const userID = this.props.userID;
    const mealID = this.props.mealID;
    const foodID = this.props.data.id;
    // deleteFood(userID, mealID, foodID);
    console.log(userID, mealID, foodID);
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showFood = () => {
    this.showModal()
  }

  hoverOn = () => {
    this.setState({ hover: true })
  }

  hoverOff = () => {
    this.setState({ hover: false })
  }

  render() {
    return(
    <div>
      <li>
        <a className={this.state.hover ? 'food-name-on' : 'food-name-off'}
           onClick={this.showFood}
           onMouseEnter={this.hoverOn}
           onMouseLeave={this.hoverOff}>
          {this.props.data.name}
        </a>
        , {this.props.data.calories} calories
        <button className='delete-food'
                onClick={this.deleteRecord}>
          X
        </button>
      </li>
      <Modal hideModal={this.hideModal}
             showModal={this.state.showModal}
             type="foodShow"/>
    </div>
  )}
}

export default Food;
