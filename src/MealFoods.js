import React, { Component } from 'react';
import Food from './Food';
import './mealFoods.css'

class MealFoods extends Component {

  render() {
    return(
      <div className='meal-foods'>
      {this.props.foods &&
        <>
          <h3>{this.props.date}: {this.props.meal}</h3>
            {this.props.foods.map(food => {
              return <Food key={food.name}
                           data={food}
                           getMeals={this.props.getMeals}
                           userKey={this.props.userKey}
                           userID={this.props.userID}
                           mealID={this.props.mealID}
                           />
            })}
        </>
      }
      </div>
    );
  }
}

export default MealFoods;
