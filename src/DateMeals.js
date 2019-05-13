import React, { Component } from 'react';
import Meal from './Meal';

class DateMeals extends Component {
  constructor() {
    super()
  };

  totalCals = () => {
    return "Butts"
  }

  render() {
    return(
      <>
        { !this.props.meals
          ? <div>Choose a date from the calendar to see your meals.</div>
          : <div className='dateMeals'>
              <div className='dateMeals-left'>
                {this.props.meals.map(meal => {
                      return <Meal key={meal.name}
                                   name={meal.name}
                                   foods={meal.foods}
                                   setCurrentFoods={this.props.setCurrentFoods}
                                   setCurrentMeal={this.props.setCurrentMeal}/>
                    })}
              </div>
              <div className='dateMeals-right'>
                <div>Total Calories: {this.totalCals()}</div>
                <button>Add Meal</button>
              </div>
            </div>
        }
      </>
    )
  }
}

export default DateMeals;
