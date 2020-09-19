import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {

    return (
      <>
        <h2> Feedback options </h2>

        <button
          type="button"
          onClick={evt => {
            this.props.onLeaveFeedback('good');
          }}
        >
          {'Good'}
        </button>

        <button
          type="button"
          onClick={evt => {
            this.props.onLeaveFeedback('bad');
          }}
        >
          {'Bad'}
        </button>

        <button
          type="button"
          onClick={evt => {
            this.props.onLeaveFeedback('neutral');
          }}
        >
          {'neutral'}
        </button>
      </>
    );
  }
}
