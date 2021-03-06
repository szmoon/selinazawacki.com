import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';
import LinkIcon from './../../components/icons/LinkIcon';
import twitterIcon from './../../assets/images/icons/twitter-icon.png';
import linkedinIcon from './../../assets/images/icons/linkedin-icon.png';
import githubIcon from './../../assets/images/icons/github-icon.png';

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseBegin: [0,0]
    };
    this.openUrl = this.openUrl.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.clickWindow = this.clickWindow.bind(this);
  }
  
  openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  startDrag(e) {
    this.props.networkWindowZIndex(this.props.currentZ + 1);
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; } 
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    this.setState({mouseBegin: coords});
  }

  endDrag(e) {
    let diff;
    if (e.screenX) { diff = [e.screenX - this.state.mouseBegin[0], e.screenY - this.state.mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - this.state.mouseBegin[0], e.changedTouches[0].clientY - this.state.mouseBegin[1]]; }
    let newPosition = [diff[0] + this.props.networkWindow.position[0], diff[1] + this.props.networkWindow.position[1]];
    this.props.networkWindowPosition(newPosition);
    this.props.incrementZ();
  }

  clickWindow() {
    this.props.networkWindowZIndex(this.props.currentZ + 1);
    this.props.incrementZ();
  }

  render() {
    const styles = {
      top: this.props.networkWindow.position[1],
      left: this.props.networkWindow.position[0],
      width: 500,
      height: 400,
      zIndex: this.props.networkWindow.zIndex
    };

    if (this.props.networkWindow.open === true) {
      return (
        <Draggable handle="strong" onStart={this.startDrag} onStop={this.endDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='network connections' close={this.props.networkWindowClose}/></strong>
          <div className="clickable-icons" onClick={this.clickWindow}>
            <GreyBarExplorer />
            <div className="window-cont"></div>
          </div>
          <div className="icon-container">
            <LinkIcon text='twitter' src={twitterIcon} action={(e) => this.openUrl('https://twitter.com/selinazawacki', e)} />
            <LinkIcon text='github' src={githubIcon} action={(e) => this.openUrl('https://github.com/szmoon', e)} />
            <LinkIcon text='linkedin' src={linkedinIcon} action={(e) => this.openUrl('https://www.linkedin.com/in/selina-chang-yi-zawacki/', e)} />
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

export default Network;