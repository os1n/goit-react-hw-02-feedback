import React, { Component } from "react";

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h3>
        Good: <span>{good}</span>
      </h3>
      <h3>
        Bad: <span>{bad}</span>
      </h3>
      <h3>
        Neutral: <span>{neutral}</span>
      </h3>
      <h3>
        Total: <span>{total}</span>
      </h3>
      <h3>
        Positive Feedback: <span>{positivePercentage}%</span>
      </h3>
    </>
  );
}
