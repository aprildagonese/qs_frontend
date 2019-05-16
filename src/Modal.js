import React, { Component } from 'react';
import AddMealForm from './AddMealForm';
import AddFoodForm from './AddFoodForm';
import FoodShow from './FoodShow';
import './Modal.css';
import './form.css';

class Modal extends Component {

  render() {
    return(
      <div className={this.props.showModal ? "modal display-block" : "modal display-none"}>
        {this.props.type === "addFood" &&
          <section className="modal-main">
            <AddMealForm userKey={this.props.userKey}
                         closeModal={this.props.closeModal}
                         food=''/>
            <button className="close-modal" onClick={this.props.closeModal}>Close</button>
          </section>
        }
        {this.props.type === "createFood" &&
          <section className="modal-main">
            <AddFoodForm closeModal={this.props.closeModal}
                         setResults={this.props.setResults}
                         getMeals={this.props.getMeals}
                         foodSearch={this.props.foodSearch}/>
            <button onClick={this.props.hideModal}>Close</button>
          </section>
        }
        {this.props.type === "foodShow" &&
          <section className="modal-main">
            <FoodShow closeModal={this.props.closeModal}
                      userKey={this.props.userKey}
                      food={this.props.food}
                      getMeals={this.props.getMeals}
                      recipes={this.props.recipes}/>
            <button className="close-modal" onClick={this.props.hideModal}>Close</button>
          </section>
        }
        {this.props.type === "login" &&
          <section className="modal-main">
            <button className="close-modal" onClick={this.props.hideModal}>Close</button>
          </section>
        }
      </div>
    )
  }
}

export default Modal;
