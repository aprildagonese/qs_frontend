import React, { Component } from 'react';
import AddMealForm from './AddMealForm';
import FoodShow from './FoodShow';
import './Modal.css';

class Modal extends Component {
  constructor() {
    super()
  };

  render() {
    return(
      <div className={this.props.showModal ? "modal display-block" : "modal display-none"}>
        {this.props.type === "addFood" &&
          <section className="modal-main">
            <AddMealForm user={this.props.user}
                         closeModal={this.props.closeModal}/>
            <button onClick={this.props.closeModal}>Close</button>
          </section>
        }
        {this.props.type === "foodShow" &&
          <section className="modal-main">
            <FoodShow closeModal={this.props.hideModal}
                      food={this.props.food}/>
            <button onClick={this.props.hideModal}>Close</button>
          </section>
        }
      </div>
    )
  }
}

export default Modal;
