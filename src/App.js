import React, { Component } from 'react';
import fetch from 'node-fetch';
// import axios from 'axios';
// import pry from 'pryjs';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_ingredient: null,
      recipe_data: [],
      calorie_data: null,
      isLoading: false,
      error: null,
      testing: "apples"
    }
  }

  async fetchRecipes(query) {
    this.setState({ isLoading: true });
    try {
      const url = "https://choosin-foods-recipes.herokuapp.com/api/v1/recipes?key=9c18d10fb5a0f5a8aa140aa5e94ceb87&ingredient=" + query
      const result = await fetch(url);
      const data = await result.json()
      const ingredient = data.ingredient
      const recipes = data.recipes
      this.setState({
        current_ingredient: ingredient,
        recipe_data: recipes,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
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
