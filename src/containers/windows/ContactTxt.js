import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarTxt } from './../../components/windows/GreyBarTxt';

class ContactTxt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseBegin: [0,0]
    };
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.clickWindow = this.clickWindow.bind(this);
  }

  startDrag(e) {
    this.props.contactTxtZIndex(this.props.currentZ + 1);
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.contactTxt.position[0], diff[1] + this.props.contactTxt.position[1]];
    this.props.contactTxtPosition(newPosition);
    this.props.incrementZ();
  }

  clickWindow() {
    this.props.contactTxtZIndex(this.props.currentZ + 1);
    this.props.incrementZ();
  }

  render() {
    const styles = {
      top: this.props.contactTxt.position[1],
      left: this.props.contactTxt.position[0],
      width: 450,
      height: 250,
      zIndex: this.props.contactTxt.zIndex
    };
    if (this.props.contactTxt.txt === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
        <div className="window" style={styles} onClick={this.clickWindow}> 
          <strong className="cursor"><Topbar text='contact.txt' close={this.props.contactTxtClose}/></strong>
          <GreyBarTxt />
          <div className="window-cont">
          <p>You can reach me at <br></br>szmoon [at symbol] gmail [dot character] com</p>
          </div>
        </div>
        </Draggable>
      );
    } else {
      return(
        null
      );
    }
    
  }
};

export default ContactTxt;