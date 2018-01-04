import React, { Component } from 'react';
 
export class Startbutton extends Component {
  constructor(props) {
    super(props);  
    this.clickStart = this.clickStart.bind(this);
  }
  clickStart() {
    console.log("clicked start!");
    // this.props.update({startMenu: true});
  }
  render() {
    return (
      <div id="start-button" onClick={this.clickStart}>
        <p>start</p>
      </div>
    );
  }
}