import React from 'react';
import FeedbackOptions from '../feedbackOptions/feedbackOptions';
import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <>
      <h1>Section Stats</h1>
      <h2>{props.title}</h2>
      <h2> Feedback options </h2>
      <FeedbackOptions
        onLeaveFeedback={props.onLeaveFeedback}
      ></FeedbackOptions>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
