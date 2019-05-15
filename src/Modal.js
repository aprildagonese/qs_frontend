import React, { Component } from 'react';
import AddMealForm from './AddMealForm';
import AddFoodForm from './AddFoodForm';
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
        {this.props.type === "createFood" &&
          <section className="modal-main">
            <AddFoodForm closeModal={this.props.hideModal}
            setResults={this.props.setResults}/>
            <button onClick={this.props.hideModal}>Close</button>
          </section>
        }
        {this.props.type === "foodShow" &&
          <section className="modal-main">
            <FoodShow closeModal={this.props.hideModal}
                      food={this.props.food}
                      recipes={this.props.recipes}/>
            <button onClick={this.props.hideModal}>Close</button>
          </section>
        }
      </div>
    )
  }
}

export default Modal;
