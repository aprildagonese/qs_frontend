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

  componentDidMount = () => {
    this.setState({
      food: this.props.foodSearch
    })
  }

  saveEntry = async () => {
    const food = this.props.foodSearch
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
      <div className="add-food-form">
        <span className="add-food-title">We don't have that food yet. Would you like to add it to our database?</span>
        <form className="form">
          <input type="text"
                 name="food"
                 value={this.props.foodSearch}
                 placeholder="Enter Food Name"
                 className="form-input"
                 onChange={this.changeHandler} />
          <input type="text"
                 name="calories"
                 value={this.state.calories}
                 placeholder="Enter Calories"
                 className="form-input"
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

export default AddFoodForm;
