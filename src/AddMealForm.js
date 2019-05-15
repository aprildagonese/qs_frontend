import React, { Component } from 'react';
import { saveMealEntry } from './services/calories'

class AddMealForm extends Component {
  constructor() {
    super()
    this.state = {
      meal: '',
      date: '',
      food: ''
    }
  };

  saveEntry = async () => {
    const user = this.props.user
    const meal = this.state.meal
    const date = this.state.date
    const food = this.state.food
    // await saveMealEntry(user, meal, date, food)
    console.log(user, meal, date, food)
    this.props.closeModal()
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        Add Food to Any Meal
        <form>
          <input type="text"
                 name="meal"
                 value={this.state.meal}
                 placeholder="Enter meal name"
                 onChange={this.changeHandler} />
          <input type="date"
                 name="date"
                 value={this.state.date}
                 placeholder="Enter meal date"
                 onChange={this.changeHandler} />
          <input type="text"
                 name="food"
                 value={this.state.food}
                 placeholder="Enter food name"
                 onChange={this.changeHandler} />
          <input type="button"
                 name="submit"
                 value="Submit"
                 onClick={this.saveEntry} />
        </form>
      </div>
    )
  }
}

export default AddMealForm;
