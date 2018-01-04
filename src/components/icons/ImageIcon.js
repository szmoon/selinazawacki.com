import React from 'react';
import './../../assets/style.css';
var createReactClass = require('create-react-class');

const ImageIcon = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} onTouchEnd={this.props.action} alt='icon' src={this.props.src} className='icon-image'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default ImageIcon;