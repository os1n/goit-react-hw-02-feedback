import React from 'react';
import propTypes from 'prop-types';

export default function FeedbackOptions(props) {
  return (
    <>
      <h2> Feedback options </h2>

      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('good');
        }}
      >
        {'Good'}
      </button>

      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('bad');
        }}
      >
        {'Bad'}
      </button>

      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('neutral');
        }}
      >
        {'neutral'}
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func,
};
