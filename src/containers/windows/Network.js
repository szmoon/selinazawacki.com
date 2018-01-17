import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';
import Icon from './../../components/icons/Icon';
import twitterIcon from './../../assets/images/icons/twitter-icon.png';
import linkedinIcon from './../../assets/images/icons/linkedin-icon.png';
import githubIcon from './../../assets/images/icons/github-icon.png';

class Network extends React.Component {
  constructor() {
    super();
    this.openUrl = this.openUrl.bind(this);
  }
  
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.networkWindow.open !== nextProps.networkWindow.open) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    const styles = {
      top: this.props.networkWindow.top,
      left: this.props.networkWindow.left,
      width: 500,
      height: 400
    };

    function handleDrag() {
      styles.zIndex = 1;
    }

    if (this.props.networkWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={handleDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='network connections' close={this.props.networkWindowClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <Icon text='twitter' src={twitterIcon} action={(e) => this.openUrl('https://twitter.com/selinazawacki', e)} />
            <Icon text='github' src={githubIcon} action={(e) => this.openUrl('https://github.com/szmoon', e)} />
            <Icon text='linkedin' src={linkedinIcon} action={(e) => this.openUrl('https://www.linkedin.com/in/selina-chang-yi-zawacki/', e)} />
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