import React, { Component } from 'react';
import { deleteFood } from './services/calories'

class Food extends Component {
  constructor() {
    super()
  }

  render() {
    return(
    <div>
      <li>{this.props.data.name}, {this.props.data.calories} calories</li>
    </div>
  )}
}

export default Food;
