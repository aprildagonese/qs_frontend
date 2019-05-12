import React, { Component } from 'react';
import Meal from './Meal';

class DateMeals extends Component {
  constructor() {
    super()
  };

  render() {
    return(
      <div className='dateMeals'>
        <div className='meals'>
          { this.props.meals &&
            this.props.meals.map(meal => {
              return <Meal key={meal.name}
                           name={meal.name}
                           foods={meal.foods}
                           setCurrentFoods={this.props.setCurrentFoods} />
            })
          }
        </div>
      </div>
    )
  }
}

export default DateMeals;
