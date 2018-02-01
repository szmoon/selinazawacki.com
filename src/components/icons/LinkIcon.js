import React from 'react';
import './../../assets/style.css';

class LinkIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <div className='icon-box' onDoubleClick={this.props.action} onTouchEnd={this.props.action}>
        <img src={this.props.src} alt={this.props.alt} className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
};

export default LinkIcon;