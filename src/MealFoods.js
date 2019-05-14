import React, { Component } from 'react';
import Food from './Food';

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
              return <Food key={food.name}
                           data={food}
                           userID={this.props.userID}
                           mealID={this.props.mealID}
                           />
            })}
          </ul>
        </>
      }
      </div>
    );
  }
}

export default MealFoods;
