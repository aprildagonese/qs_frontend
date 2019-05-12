import React, { Component } from 'react';
import Calendar from './Calendar';
import DateMeals from './DateMeals';
import { fetchRecipes } from './services/recipes'
import { fetchMealHistory } from './services/calories'
import './App.css';
var data = require('./mockData')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserKey: "92e8d1428fcadc1c114e4d05b203df9b",
      recipeData: [],
      currentIngredient: null,
      currentDate: null,
      currentFoods: null,
      mealHistory: data,
      dateMeals: null,
      isLoading: false,
      error: null
    }
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const mealResults = await fetchMealHistory(this.state.currentUserKey)
  //   this.setState({
  //     mealHistory: mealResults,
  //     isLoading: false
  //   })
  // }

  async getRecipes(query) {
    this.setState({ isLoading: true })
    const ingredientResults = await fetchRecipes(query)
    this.setState({
      currentIngredient: ingredientResults.ingredient,
      recipeData: ingredientResults.recipes,
      isLoading: false
    })
  }

  setCurrentDate = (date, dateMeals) => {
    this.setState({
      currentDate: date,
      dateMeals: dateMeals
    })
  }

  setCurrentFoods = (foods) => {
    this.setState({
      currentFoods: foods
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
        { this.state.currentDate &&
          <DateMeals meals={this.state.dateMeals}
                     setCurrentFoods={this.setCurrentFoods}
          />
        }
      </div>
    )
  };
}

export default App;
