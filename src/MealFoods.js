import React, { Component } from 'react';

class MealFoods extends Component {
  constructor() {
    super()
  };

  render() {
    return(
      <div className='meal-foods'>
      {this.props.foods &&
        <>
          <h3>{this.props.meal}</h3>
          <h4>{this.props.date}</h4>
          <ul>
            {this.props.foods.map(food => {
              return <li>{food.name}, {food.calories} calories</li>
            })}
          </ul>
        </>
      }
      </div>
    );
  }
}

export default MealFoods;
