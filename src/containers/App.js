import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import './../assets/style.css';
import folderPink from './../assets/images/icons/folder-icon-pink.png';
import iconNetwork from './../assets/images/icons/network-icon.png';
import iconComputer from './../assets/images/icons/computer-icon.png';
import iconPrinter from './../assets/images/icons/printer-icon.png';

import { Bottombar } from './bottombar/Bottombar';
// import { Startmenu } from './Startmenu';
import Icon from './../components/icons/Icon';
import LinkIcon from './../components/icons/LinkIcon';
import TxtIcon from './../components/icons/TxtIcon';
import About from './windows/About';
import AboutImage from './windows/AboutImage';
import AboutTxt from './windows/AboutTxt';
import ContactTxt from './windows/ContactTxt';
import Network from './windows/Network';

// require.context('../images', true, /^\.\//);
var mapStateToProps = require("./../functions/mapStateToProps");

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentZ: 0
    };
    this.incrementZ = this.incrementZ.bind(this);
    this.openUrl = this.openUrl.bind(this);
  }

  incrementZ() {
    this.setState({currentZ: this.state.currentZ + 1});
  }

  openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    let About2 = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(About);
    let AboutImage2 = connect(mapStateToProps.aboutImage, mapDispatchToProps)(AboutImage);
    let AboutTxt2 = connect(mapStateToProps.aboutTxt, mapDispatchToProps)(AboutTxt);
    let AboutFolder = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(Icon);
    let Network2 = connect(mapStateToProps.network, mapDispatchToProps)(Network);
    let ContactTxt2 = connect(mapStateToProps.contactTxt, mapDispatchToProps)(ContactTxt);

    return (
      <div>
        <div className='divblock'>
          <AboutFolder text='about' src={folderPink} alt='folder-icon' action={(e) => this.props.aboutWindowOpen(this.state.currentZ, e)} incrementZ={this.incrementZ}/>
          <LinkIcon text='blog' src={iconComputer} action={(e) => this.openUrl('http://blog.selinazawacki.com/', e)} />
          <AboutFolder text='network' src={iconNetwork} alt='network-icon' action={(e) => this.props.networkWindowOpen(this.state.currentZ, e)} incrementZ={this.incrementZ}/>
          <LinkIcon text='portfolio' src={iconPrinter} action={(e) => this.openUrl('http://portfolio.selinazawacki.com/', e)} />
          <TxtIcon text='contact.txt' action={(e) => this.props.contactTxtOpen(this.props.currentZ, e)} incrementZ={this.incrementZ}/>
        </div>
        <About2 incrementZ={this.incrementZ} currentZ={this.state.currentZ} />
        <AboutImage2 incrementZ={this.incrementZ} currentZ={this.state.currentZ} />
        <AboutTxt2 aboutTxtZ={this.state.aboutTxtZ} incrementZ={this.incrementZ} currentZ={this.state.currentZ} />
        <ContactTxt2 contactTxtZ={this.state.contactTxtZ} incrementZ={this.incrementZ} currentZ={this.state.currentZ} />
        <Network2 networkZ={this.state.networkZ} incrementZ={this.incrementZ} currentZ={this.state.currentZ} />
        <Bottombar />
      </div>
    );
  } 
}

export default connect(mapStateToProps.app, mapDispatchToProps)(App);