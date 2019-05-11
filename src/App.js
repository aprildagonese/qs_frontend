import React, { Component } from 'react';
import fetch from 'node-fetch';
import recipes from './services/recipes'
import calData from './services/calories'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIngredient: null,
      recipeData: [],
      calorieData: null,
      isLoading: false,
      error: null,
      testing: "apples"
    }
  }

  async fetchRecipes(query) {
    this.setState({ isLoading: true })
    const ingredientResults = await recipes(query)
    this.setState({
      currentIngredient: ingredientResults.ingredient,
      recipeData: ingredientResults.recipes,
      isLoading: false
    })
  }

  async fetchMealHistory(query) {
    this.setState({ isLoading: true });
    const mealResults = await calData(query)
  }

  render() {
    return (
      <div className="App">
        Hi Peregrine!
      </div>
    )
  }
};

export default App;
