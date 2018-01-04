import React, { Component } from 'react';
import './../../assets/style.css';

class Icon extends Component {
  render() {
    return ( 
      <div className='icon-box' onDoubleClick={this.props.onDoubleClick}>
        <img onDoubleClick={this.props.action} src={this.props.src} alt={this.props.alt} className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
};

export default Icon;