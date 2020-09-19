import React, { Component } from 'react';
import FeedbackOptions from '../feedbackOptions/feedbackOptions';

export default class Section extends Component {
  render() {
    return (
      <>
        <h1>Section Stats</h1>
        <h2>{this.props.title}</h2>

        <FeedbackOptions
          options={this.props.options}
          onLeaveFeedback={this.props.onLeaveFeedback}
        />
      </>
    );
  }
}
