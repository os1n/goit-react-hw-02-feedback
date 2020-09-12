import React, { Component } from 'react';

export default class FeedbackButton extends Component {
    render() {
        return (
            <button>{`${option}`}</button>
            <button
            type="button"
            onClick={(evt) => {
              this.incrementState("good");
              console.log(`${option} btn pressed`);
            }}
          ></button>
        )
    }
}