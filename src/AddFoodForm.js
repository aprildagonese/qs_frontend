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
    const results = await saveFoodEntry(food, calories)
    this.props.setResults(results)
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        We don't have that food yet. Would you like to add it to our database?
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
