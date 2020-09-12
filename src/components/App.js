import React, { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./statistics/statistics";
import FeedbackOptions from "./feedbackOptions/feedbackOptions"
import styles from "./App.moodule.css";

console.log(styles.container);

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
    const { good, neutral, bad } = this.state;
    //console.log(Object.values(this.state));
    this.setState((prevState) => {
      if (value === "good") return { good: prevState.good + 1 };
      if (value === "bad") return { bad: prevState.bad + 1 };
      if (value === "neutral") return { neutral: prevState.neutral + 1 };
    });
  };

  countTotalFeedback = (object) => {
    console.log(Object.values(object));
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

  render() {
    const { good, neutral, bad } = this.state;
    // Вынеси блок кнопок в компонент 
    // Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
    let total = this.countTotalFeedback(this.state);
    let positivePercent = this.countPositiveFeedbackPercentage(this.state);
    //console.log(positivePercent);
    return (
      <>
        <section className={styles.container}>
        
        <Section title="Please leave feedback!!" cldrn> </Section>
          
          <h1>Please leave feedback!!</h1>
          
          <FeedbackOptions options={[good, bad, neutral]} onLeaveFeedback={incrementState}> </FeedbackOptions>
          
          <button
            type="button"
            onClick={(evt) => {
              this.incrementState("good");
            }}
          >
            {" "}
            Good{" "}
          </button>
          <button
            type="button"
            onClick={(evt) => {
              this.incrementState("bad");
            }}
          >
            {" "}
            Bad{" "}
          </button>
          <button
            type="button"
            onClick={(evt) => {
              this.incrementState("neutral");
            }}
          >
            {" "}
            Neutral{" "}
          </button>

          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          >
            {" "}
          </Statistics>
          {/* {Object.values(this.state); } */}
        </section>
      </>
    );
  }
}
