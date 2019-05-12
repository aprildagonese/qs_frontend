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
        {this.props.dates.meals.dates.map(date => {
          const newDate = new Date(Object.keys(date)[0])
          const prettyDate = newDate.toLocaleDateString('en-US')
          const meals = date[newDate]
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
