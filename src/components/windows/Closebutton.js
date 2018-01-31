import React, { Component } from 'react';
 
export class Closebutton extends Component {
  render() {
    return (
      <div className="close-button" onMouseDown={this.props.close} onTouchStart={this.props.close}>
        <p>X</p>
      </div>
    );
  }
}