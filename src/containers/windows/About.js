import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';
import TxtIcon from './../../components/icons/TxtIcon';
import ImageIcon from './../../components/icons/ImageIcon';
import imageIconPhoto from './../../assets/images/icons/selina-icon.png';

class About extends React.Component {
  render() {
    const styles = {
      top: this.props.aboutWindow.top,
      left: this.props.aboutWindow.left,
      width: 500,
      height: 400
    };
    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
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