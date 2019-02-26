import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarTxt } from './../../components/windows/GreyBarTxt';

class AboutTxt extends React.Component {
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
    this.props.aboutTxtZIndex(this.props.currentZ + 1);
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.aboutTxt.position[0], diff[1] + this.props.aboutTxt.position[1]];
    this.props.aboutTxtPosition(newPosition);
    this.props.incrementZ();
  }

  clickWindow() {
    this.props.aboutTxtZIndex(this.props.currentZ + 1);
    this.props.incrementZ();
  }

  render() {
    const styles = {
      top: this.props.aboutTxt.position[1],
      left: this.props.aboutTxt.position[0],
      width: 400,
      height: 400,
      zIndex: this.props.aboutTxt.zIndex
    };
    if (this.props.aboutTxt.txt === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
        <div className="window" style={styles} onClick={this.clickWindow}> 
          <strong className="cursor"><Topbar text='about.txt' close={this.props.aboutTxtClose}/></strong>
          <GreyBarTxt />
          <div className="window-cont">
          <p><u>Selina Chang-Yi Zawacki</u>: Analog Girl in a Digital World</p>
          <br></br>
          <p>Full-stack software engineer specialized in creating Node.js and PHP APIs, and experienced with cloud services. Also experienced in circuit design and the Arduino language.</p>
          <br></br>
          <p>Love teaching and always looking for opportunities to do outreach to get young women, minorities and low income students interested in technology.</p>
          <br></br>
          <p>Website created using React/Redux. <br></br>Last updated: 2/26/19</p>
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

export default AboutTxt;