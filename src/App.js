import React, { Component } from 'react';
import fetch from 'node-fetch';
import { fetchRecipes } from './services/recipes'
import { fetchMealHistory } from './services/calories'
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

  async getRecipes(query) {
    this.setState({ isLoading: true })
    const ingredientResults = await fetchRecipes(query)
    this.setState({
      currentIngredient: ingredientResults.ingredient,
      recipeData: ingredientResults.recipes,
      isLoading: false
    })
  }

  async getMealHistory(query) {
    this.setState({ isLoading: true });
    const mealResults = await fetchMealHistory(query)
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
