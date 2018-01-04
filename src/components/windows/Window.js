import React, { Component } from 'react';
import { render } from 'react-dom';
import { Topbar } from './Topbar';
import { Topbargrey } from './Topbargrey';
import Draggable from 'react-draggable'; // The default
 
export class Window extends Component {
  constructor() {
    super();  
  }



  render() {
    return (
      <Draggable handle="strong">
      <div className="window"> 
        <strong className="cursor"><Topbar update={this.props.update}/></strong>
        <Topbargrey />
        {/* <div className="window-cont">
          ABOUT TEXT BOX
        </div> */}
      </div>
      </Draggable>
    );
  }
}