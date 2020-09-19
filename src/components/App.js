import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './statistics/statistics';
// import FeedbackOptions from './feedbackOptions/feedbackOptions';
import styles from './App.moodule.css';

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = object => {
    //console.log(Object.values(object));
    return Object.values(object).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage(object) {
    return object.good !== 0
      ? (
          (+object.good * 100) /
          Object.values(object).reduce((a, b) => a + b, 0)
        ).toFixed(2)
      : 100;
  }

  incrementState = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    let total = this.countTotalFeedback(this.state);
    let positivePercent = this.countPositiveFeedbackPercentage(this.state);

    // console.log('Summ of state', Object.values(this.state).join(''));

    return (
      <>
        <section className={styles.container}>
          {/* Section to control the feedback data */}
          <Section
            title="Please leave feedback!!"
            options={[good, bad, neutral]}
            onLeaveFeedback={this.incrementState}
          />          

          {Object.values(this.state).join('') !== '000' && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            />
          )}
        </section>
      </>
    );
  }
}
