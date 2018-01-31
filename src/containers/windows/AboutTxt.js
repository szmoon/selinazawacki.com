import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarTxt } from './../../components/windows/GreyBarTxt';

class AboutTxt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseBegin: [0,0],
      aboutTxtZ: this.props.aboutTxtZ
    };
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
  }

  startDrag(e) {
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords, aboutTxtZ: this.props.currentZ + 1});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.aboutTxt.position[0], diff[1] + this.props.aboutTxt.position[1]];
    this.props.aboutTxtPosition(newPosition);
    this.props.setZ({aboutTxtZ: this.state.aboutTxtZ});
  }

  render() {
    const styles = {
      top: this.props.aboutTxt.position[1],
      left: this.props.aboutTxt.position[0],
      width: 400,
      height: 400,
      zIndex: this.state.aboutTxtZ
    };
    if (this.props.aboutTxt.txt === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='about.txt' close={this.props.aboutTxtClose}/></strong>
          <GreyBarTxt />
          <div className="window-cont">
          <p>Software developer and mentor specializing in JavaScript, Node and making best use of React lifecycle methods. Experienced in circuitry, Arduino and Python.</p>
          <br></br>
          <p>Always looking for opportunities to do outreach to get young women, minorities and low income students interested in technology.</p>
          <br></br>
          <p>Website created using React/Redux. Continually adding on to it in my spare time. :)</p>
          <p>Last updated: 1/30/18</p>
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