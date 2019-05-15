import React, { Component } from 'react';
import { saveFoodEntry } from './services/calories'

class AddFoodForm extends Component {
  constructor() {
    super()
    this.state = {
      food: '',
      calories: ''
    }
  };

  saveEntry = async () => {
    const food = this.state.food
    const calories = this.state.calories
    await saveFoodEntry(food, calories)
    console.log(food, calories)
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
        Food Not Found, Add It Now?
        <form>
          <input type="text"
                 name="food"
                 value={this.state.food}
                 placeholder="Enter food name"
                 onChange={this.changeHandler} />
          <input type="text"
                 name="calories"
                 value={this.state.calories}
                 placeholder="Enter calories"
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

export default AddFoodForm;
