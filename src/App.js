import React, { Component } from 'react';
import Nav from './Nav';
import Calendar from './Calendar';
import MealFoods from './MealFoods';
import DateMeals from './DateMeals';
import Modal from './Modal';
import Login from './Login';
import { fetchRecipes } from './services/recipes'
import { fetchMealHistory } from './services/calories'
import './App.css';
var data = require('./mockData')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserKey: null,
      recipeData: [],
      currentIngredient: null,
      currentDate: null,
      currentFoods: null,
      currentMeal: null,
      mealHistory: null,
      dateMeals: null,
      isLoading: false,
      showModal: false,
      userID: null, //UNDO w/ componentDidMount
      mealID: null,
      error: null
    }
  }

  async getRecipes(query) {
    this.setState({ isLoading: true })
    const ingredientResults = await fetchRecipes(query)
    this.setState({
      currentIngredient: ingredientResults.ingredient,
      recipeData: ingredientResults.recipes,
      isLoading: false
    });
  }

  setCurrentDate = (date, dateMeals) => {
    this.setState({
      currentDate: date,
      dateMeals: dateMeals
    });
  }

  setCurrentUserKey = async (key) => {
    if (key === "Invalid credentials.") {
      this.setState({
        error: "Invalid credentials."
      })
    } else {
      {this.setState({
        currentUserKey: key
      });
      const mealResults = await fetchMealHistory(key)
      this.setState({
        mealHistory: mealResults,
        userID: mealResults.user_id
      })}
    }
  }

  logOut = async (key) => {
    this.setState({
      currentUserKey: null
    })
  }

  setCurrentFoods = (foods, meal, id) => {
    this.setState({
      currentFoods: foods,
      currentMeal: meal,
      mealID: id
    });
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentUserKey
          ?  <>
              <Nav showModal={this.showModal}
                   logOut={this.logOut}/>
              <Modal closeModal={this.hideModal}
                     showModal={this.state.showModal}
                     type="addFood"
                     user={this.state.currentUserKey}/>
              <span className="body-panel">
                <span className="foods-panel">
                <MealFoods key={this.state.currentDate}
                           meal={this.state.currentMeal}
                           foods={this.state.currentFoods}
                           date={this.state.currentDate}
                           userID={this.state.userID}
                           mealID={this.state.mealID}
                           setFoodID={this.setFoodID}
                           />
                <DateMeals meals={this.state.dateMeals}
                           setCurrentFoods={this.setCurrentFoods}/>
                </span>
                  { this.state.mealHistory &&
                    <Calendar dates={this.state.mealHistory}
                    setDate={this.setCurrentDate}
                    />
                  }
              </span>
            </>
          : <Login setUser={this.setCurrentUserKey}
                    error={this.state.error}/>
        }
      </div>
    )
  };
}

export default App;
