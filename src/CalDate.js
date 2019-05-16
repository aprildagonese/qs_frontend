import React, { Component } from 'react';

class CalDate extends Component {

  setDate = () => {
    this.props.calSetDate(this.props.date, this.props.dateMeals)
  }

  render() {
    return(
      <div>
        <button className='calDate'
                onClick={this.setDate}>
          {this.props.date}
        </button>
      </div>
    );
  }
}

export default CalDate;
