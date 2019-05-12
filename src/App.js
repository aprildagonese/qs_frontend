import React, { Component } from 'react';
import { fetchRecipes } from './services/recipes'
import { fetchMealHistory } from './services/calories'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserKey: "92e8d1428fcadc1c114e4d05b203df9b",
      currentIngredient: null,
      recipeData: [],
      mealHistory: {},
      isLoading: false,
      error: null,
      testing: "apples"
    }
  }

  async componentDidMount(query) {
    this.setState({ isLoading: true });
    const mealResults = await fetchMealHistory(query, this.state.currentUserKey)
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

  render() {
    return (
      <div className="App">
        Hi Peregrine!
      </div>
    )
  }
};

export default App;
