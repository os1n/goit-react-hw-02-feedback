import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './statistics/statistics';
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
    return Object.values(object).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage(object) {
    let positiveFeedbackPercentage = (
      (object.good * 100) /
      Object.values(object).reduce((a, b) => a + b, 0)
    ).toFixed(2);

    if (object.good !== 0) return positiveFeedbackPercentage;
    else return 0;
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

    return (
      <>
        <section className={styles.container}>
          <Section
            title="Please leave feedback!!"
            options={[good, bad, neutral]}
            onLeaveFeedback={this.incrementState}
          />

          {this.countTotalFeedback(this.state) !== 0 && (
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