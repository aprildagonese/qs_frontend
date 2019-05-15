import React, { Component } from 'react';
import CalDate from './CalDate';

class Calendar extends Component {
  constructor() {
    super()
  };

  render(dates) {
    return (
      <div className='calendar'>
        <div className='cal-title'>Calendar</div>
        { this.props.dates.meals.map(date => {
          var newDate = new Date(Object.keys(date)[0])
          const prettyDate = newDate.toLocaleDateString('en-US')
          const meals = date[Object.keys(date)[0]]
          console.log(date)
          console.log(Object.keys(date)[0])
          console.log(meals)
          return <CalDate key={prettyDate}
                          date={prettyDate}
                          dateMeals={meals}
                          calSetDate={this.props.setDate}
                          />
        })
        }
      </div>
    );
  }
}

export default Calendar;
