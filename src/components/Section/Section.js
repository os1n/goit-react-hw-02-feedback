import React from 'react';
import FeedbackOptions from '../feedbackOptions/feedbackOptions';
import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <>
      <h1>Section Stats</h1>
      <h2>{props.title}</h2>

      <FeedbackOptions
        options={props.options}
        onLeaveFeedback={props.onLeaveFeedback}
      />
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
