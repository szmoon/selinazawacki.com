import React, { Component } from 'react';
import volumeIcon from './../../assets/images/volume.png';
 
export class Timebox extends Component {
  render() {
    var currentdate = new Date(); 
    var datetime =  currentdate.getHours() + ":"  
                    + currentdate.getMinutes();

    return (
      <div id="time-box">
        <p><img src={volumeIcon} alt='volume-icon' className='mini-icon'/></p><p>{datetime}</p>
      </div>
    );
  }
}