import React, { Component } from 'react';
import Modal from './Modal';
import { fetchRecipes } from './services/recipes';
import { fetchFood } from './services/calories';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      food: '',
      showModal: false,
      searchResults: null,
      recipes: null,
      foodSearch: null
    }
  }

  changeFood = (event) => {
    this.setState({ food: event.target.value });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  enterListener = async (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      var food = await event.target.value
      await this.fetchFoodAndRecipes(food)
      this.setState({
        food: '',
        showModal: true,
        foodSearch: food
      });
    }
  }

  fetchFoodAndRecipes = async (search) => {
    const food = await fetchFood(search);
    let recipes = null
    if (food) {
      recipes = await fetchRecipes(food.name);
    }
    this.setState({
      searchResults: food,
      recipes: recipes
    })
  }

  setResults = async (results) => {
    const recipes = await fetchRecipes(results.name);
    this.setState({
      searchResults: results,
      recipes: recipes
    });
  }

  render() {
    return(
      <div>
        <form>
          <input type="text"
                 name="search"
                 value={this.state.food}
                 placeholder="Search Foods"
                 onChange={this.changeFood}
                 className="searchbar"
                 onKeyPress={this.enterListener}
                 />
        </form>
        <Modal hideModal={this.hideModal}
               showModal={this.state.showModal}
               type={this.state.searchResults ? "foodShow" : "createFood" }
               food={this.state.searchResults}
               foodSearch={this.state.foodSearch}
               recipes={this.state.recipes}
               setResults={this.setResults}/>
      </div>
    )
  }
}

export default SearchBar;
