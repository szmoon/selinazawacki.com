import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';
import TxtIcon from './../../components/icons/TxtIcon';
import ImageIcon from './../../components/icons/ImageIcon';
import imageIconPhoto from './../../assets/images/icons/selina-icon.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseBegin: [0,0],
      aboutZ: this.props.aboutZ
    };
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
  }

  startDrag(e) {
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords, aboutZ: this.props.currentZ + 1});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.aboutWindow.position[0], diff[1] + this.props.aboutWindow.position[1]];
    this.props.aboutWindowPosition(newPosition);
    this.props.setZ({aboutZ: this.state.aboutZ});
  }

  render() {
    const styles = {
      top: this.props.aboutWindow.position[1],
      left: this.props.aboutWindow.position[0],
      width: 500,
      height: 400,
      zIndex: this.state.aboutZ
    };

    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
          <div  className="window" style={styles}> 
            <strong className="cursor"><Topbar text='about' close={this.props.aboutWindowClose}/></strong>
            <GreyBarExplorer />
            <div className="window-cont">
              <TxtIcon text='about.txt' action={this.props.aboutTxtOpen}/>
              <ImageIcon text='selina.png' src={imageIconPhoto} action={this.props.aboutImageOpen}/>
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

export default About;