import React, { Component } from 'react';
import { saveMealEntry } from './services/calories'
import './form.css';

class AddMealForm extends Component {
  constructor() {
    super()
    this.state = {
      meal: '',
      date: '',
      food: ''
    }
  };

  componentDidMount = () => {
    this.setState({
      food: this.props.food
    })
  }

  saveEntry = async () => {
    const user = this.props.user
    const meal = this.state.meal
    const date = this.state.date
    const food = this.state.food
    await saveMealEntry(user, meal, date, food)
    this.props.closeModal()
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="add-meal">
        <span className="add-meal-title">Add Food to Any Meal</span>
        <form className="form">
           <input type="text"
                  name="meal"
                  value={this.state.meal}
                  placeholder="Enter Meal Name"
                  className="form-input"
                  onChange={this.changeHandler} />
           <input type="date"
                  name="date"
                  value={this.state.date}
                  placeholder={new Date()}
                  className="form-input"
                  onChange={this.changeHandler} />
           <input type="text"
                  name="food"
                  value={this.state.food}
                  className="form-input"
                  placeholder="Enter Food Name"
                  onChange={this.changeHandler} />
           <input type="button"
                  name="submit"
                  value="Submit"
                  className="button form-button"
                  onClick={this.saveEntry} />
        </form>
      </div>
    )
  }
}

export default AddMealForm;
