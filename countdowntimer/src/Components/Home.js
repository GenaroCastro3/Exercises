import React, { Component } from 'react';
import Clock from './Clock';
import '../App.css';
import { Form, FormControl } from 'react-bootstrap';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: '2019/02/09'
    };
  }

  render() {
    return (
      <div className="app-container">
        <h3>Countdown Timer</h3>
        <Form inline>
          <FormControl
            type="date"
            className="deadline-input"
            onChange={event => {
                var formattedDate = event.target.value.replace(/-/g, "/")
                if(Date.parse(formattedDate) - Date.parse(new Date()) < 0){
                    alert("Please select an appropiate date")
                    return
                }
                this.setState({deadline: formattedDate})
              }
            }
          />
        </Form>
        <Clock deadline={this.state.deadline} />
      </div>
    )
  }
}

export default Home;