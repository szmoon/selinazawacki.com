import React from 'react';
import './../../assets/style.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.iconClick = this.iconClick.bind(this);
  }

  iconClick() {
    this.props.action();
    this.props.incrementZ();
  }
  
  render() {
    return ( 
      <div className='icon-box' onDoubleClick={this.iconClick} onTouchEnd={this.iconClick}>
        <img src={this.props.src} alt={this.props.alt} className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
};

export default Icon;