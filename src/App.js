import React, { Component } from 'react';
import Calendar from './Calendar';
import { fetchRecipes } from './services/recipes'
import { fetchMealHistory } from './services/calories'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserKey: "92e8d1428fcadc1c114e4d05b203df9b",
      currentIngredient: null,
      currentDate: null,
      recipeData: [],
      mealHistory: null,
      isLoading: false,
      error: null
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const mealResults = await fetchMealHistory(this.state.currentUserKey)
    this.setState({
      mealHistory: mealResults,
      isLoading: false
    })
  }

  async getRecipes(query) {
    this.setState({ isLoading: true })
    const ingredientResults = await fetchRecipes(query)
    this.setState({
      currentIngredient: ingredientResults.ingredient,
      recipeData: ingredientResults.recipes,
      isLoading: false
    })
  }

  setCurrentDate = (date) => {
    this.setState({
      currentDate: date
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.mealHistory &&
          <Calendar dates={this.state.mealHistory}
                    setDate={this.setCurrentDate}
          />
        }
      </div>
    )
  };
}

export default App;
