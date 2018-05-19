import React, { Component } from 'react';
import TimeContainer from './TimeContainer'
import {timeNames} from '../constants/index.js'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockData : []
    }
  }

  componentWillMount() {
    this.getTimeDifference(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeDifference(this.props.deadline), 1000);
  }

  getTimeDifference(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const miniutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    
    this.setState({clockData:[days, hours, miniutes, seconds]});
  }

  render() {
    return (
      <div>
        {this.state.clockData.map(function(item, i){
            return <TimeContainer time={item} description={timeNames[i]} key={i}/>;
        })}
      </div>
    )
  }
}

export default Clock;