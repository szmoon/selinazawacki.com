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
      zIndex: this.props.currentZ
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(e) {
    // console.log('currentZ',this.props.currentZ);
    this.setState({mouseBegin: [e.screenX, e.screenY], zIndex: this.props.currentZ + 1});
  }

  handleDrop(e) {
    // console.log('original', this.props.aboutWindow.position);
    let diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]];
 
    let newPosition = [diff[0] + this.props.aboutWindow.position[0], diff[1] + this.props.aboutWindow.position[1]];

    this.props.aboutWindowPosition(newPosition);
    this.setState({mouseBegin: [0, 0]});
    this.props.setZ();
  }

  render() {
    const styles = {
      top: this.props.aboutWindow.position[1],
      left: this.props.aboutWindow.position[0],
      width: 500,
      height: 400,
      zIndex: this.state.zIndex
    };

    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onStart={this.handleDrag} onStop={this.handleDrop}>
        <div className="window" style={styles}> 
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