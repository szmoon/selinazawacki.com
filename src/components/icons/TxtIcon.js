import React from 'react';
import './../../assets/style.css';
import txtIconImage from './../../assets/images/icons/txt-icon.png';
var createReactClass = require('create-react-class');

const TxtIcon = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} src={txtIconImage} alt='text-file-icon' className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default TxtIcon;