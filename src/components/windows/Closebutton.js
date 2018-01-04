import React, { Component } from 'react';
 
export class Closebutton extends Component {
  render() {
    return (
      <div className="close-button" onClick={this.props.close}>
        <p>X</p>
      </div>
    );
  }
}