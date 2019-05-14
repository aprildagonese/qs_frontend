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
      recipes: null
    }
  }

  changeFood = (event) => {
    this.setState({ food: event.target.value });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  enterListener = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      this.fetchFoodAndRecipes(event.target.value)
      this.setState({
        food: '',
        showModal: true
      });
    }
  }

  fetchFoodAndRecipes = async (search) => {
    const food = await fetchFood(search);
    const recipes = await fetchRecipes(food);
    this.setState({
      searchResults: food,
      recipes: recipes
    })
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
                 onKeyPress={this.enterListener}
                 />
        </form>
        <Modal hideModal={this.hideModal}
               showModal={this.state.showModal}
               type="foodShow"
               food={this.state.searchResults}
               recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default SearchBar;
