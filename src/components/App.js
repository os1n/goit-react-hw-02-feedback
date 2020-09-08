import React, { Component } from "react";

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // static propTypes = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementState = (value) => {
    const {good, neutral, bad} = this.state;
    //console.log(Object.values(this.state));
    this.setState(prevState => {
      if (value === 'good') return { good: prevState.good + 1 };
      if (value === 'bad') return { bad: prevState.bad + 1 };
      if (value === 'neutral') return { neutral: prevState.neutral + 1 };
      
     })
  };

  countTotalFeedback = (object) => {
    console.log(Object.values(object));
    return Object.values(object).reduce((a, b) => a + b, 0);
  } 
  
  countPositiveFeedbackPercentage(object) {
    return object.good !== 0 ? (+object.good*100/Object.values(object).reduce((a, b) => a + b, 0)).toFixed(2) : 100;
  }

  render() {

    const {good, neutral, bad} = this.state;

    return (
      <>
        <h1>Please leave feedback!!</h1>
        <button type="button" onClick= {evt => {this.incrementState('good')}}> Good </button>
        <button type="button" onClick= {evt => {this.incrementState('neutral')}}> Neutral </button>
        <button type="button" onClick= {evt => {this.incrementState('bad')}}> Bad </button>
        {/* {Object.values(this.state); } */}
        <h2>Statistics</h2>
    <h3>Good: <span>{good}</span></h3>
    <h3>Bad: <span>{bad}</span></h3>
    <h3>Neutral: <span>{neutral}</span></h3>
    <h3>Total: <span>{this.countTotalFeedback(this.state)}</span></h3>
    <h3>Positive Feedback: <span>{this.countPositiveFeedbackPercentage(this.state)}%</span></h3>
      </>
      
    );
  }
}
