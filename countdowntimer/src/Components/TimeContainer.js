import React, { Component } from 'react';

class TimerContainer extends Component {

  render() {
    return (
    <div className="clock-container">
        {this.props.time}
        <p className="description-font">
            {this.props.description}
        </p>
    </div>
    )
  }
}

export default TimerContainer;