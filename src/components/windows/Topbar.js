import React, { Component } from 'react';
import { Closebutton } from './Closebutton';

export class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <p>{this.props.text}</p>
        <Closebutton close={this.props.close}/>
      </div>
    );
  }
}