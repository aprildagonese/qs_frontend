import React, { Component } from 'react';
import Meal from './Meal';
import './dateMeals.css';

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
          ? <div className="get-started-msg">Choose a date from the calendar to see your meals, or add a meal to start logging calories.</div>
          : <div className='dateMeals'>
              <div className='dateMeals-left'>
                {this.props.meals.map(meal => {
                      return <Meal key={meal.name}
                                   name={meal.name}
                                   foods={meal.foods}
                                   setCurrentFoods={this.props.setCurrentFoods}
                                   mealID={meal.id}
                                   />
                    })}
              </div>
              <div className='dateMeals-right'>
                <div>Total Calories: {this.totalCals()}</div>
              </div>
            </div>
        }
      </>
    )
  }
}

export default DateMeals;
