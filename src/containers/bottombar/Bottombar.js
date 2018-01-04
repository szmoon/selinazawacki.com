import React, { Component } from 'react';
import { Startbutton } from './Startbutton';
import { Timebox } from './Timebox';
 
export class Bottombar extends Component {
  render() {
    return (
      <div id="bottom-bar">
        <Startbutton update={this.props.update}/>
        <Timebox />
      </div>
    );
  }
}