import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';
import selinaImage from './../../assets/images/pngs/selina-large.png';

class AboutImage extends React.Component {
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
    this.props.aboutImageZIndex(this.props.currentZ + 1);
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.aboutImage.position[0], diff[1] + this.props.aboutImage.position[1]];
    this.props.aboutImagePosition(newPosition);
    this.props.incrementZ();
  }

  clickWindow() {
    this.props.aboutImageZIndex(this.props.currentZ + 1);
    this.props.incrementZ();
  }

  render() {
    const styles = {
      top: this.props.aboutImage.position[1],
      left: this.props.aboutImage.position[0],
      width: 300,
      zIndex: this.props.aboutImage.zIndex
    };
    if (this.props.aboutImage.image === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
          <div className="window-image" style={styles} onClick={this.clickWindow}> 
            <strong className="cursor"><Topbar text='about.png' close={this.props.aboutImageClose}/></strong>
            <GreyBarExplorer />
            <div className="window-cont">
              <img src={selinaImage} alt='selina-png' className='image'/>
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

export default AboutImage;