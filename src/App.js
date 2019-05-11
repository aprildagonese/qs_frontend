import React, { Component } from 'react';
// import axios from 'axios';
// import pry from 'pryjs';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_ingredient: null,
      recipe_data: null,
      calorie_data: null,
      isLoading: false,
      error: null,
      testing: "apples"
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const url = "https://choosin-foods-recipes.herokuapp.com/api/v1/recipes?key=9c18d10fb5a0f5a8aa140aa5e94ceb87&ingredient=Chicken"
    fetch(url)
      .then(result => {
        console.log("BUTTS")
        console.log(result.data)
      })
      .then(result => this.setState({
        current_ingredient: "Salmon",
        recipe_data: result,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    return (
      <div className="App">
        Here is the recipe data: {this.state.current_ingredient}
      </div>
    )
  }
};

export default App;
