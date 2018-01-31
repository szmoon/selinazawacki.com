import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import './../assets/style.css';
import folderPink from './../assets/images/icons/folder-icon-pink.png';
import iconNetwork from './../assets/images/icons/network-icon.png';

import { Bottombar } from './bottombar/Bottombar';
// import { Startmenu } from './Startmenu';
import Icon from './../components/icons/Icon';
import About from './windows/About';
import AboutImage from './windows/AboutImage';
import AboutTxt from './windows/AboutTxt';
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
      currentZ: 0,
      aboutZ: 0,
      networkZ: 0
    };
    this.setZ = this.setZ.bind(this);
  }

  setZ(obj) {
    let newZ = this.state.currentZ + 1;
    obj.currentZ = newZ;
    this.setState(obj);
  }

  render() {
    let About2 = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(About);
    let AboutImage2 = connect(mapStateToProps.aboutImage, mapDispatchToProps)(AboutImage);
    let AboutTxt2 = connect(mapStateToProps.aboutTxt, mapDispatchToProps)(AboutTxt);
    let AboutFolder = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(Icon);
    let Network2 = connect(mapStateToProps.network, mapDispatchToProps)(Network);

    return (
      <div>
        <div className='divblock'>
          <AboutFolder text='about' src={folderPink} alt='folder-icon' action={this.props.aboutWindowOpen}/>
          {/* <AboutFolder text='about' src={folderPink} alt='folder-icon' action={(e) => this.props.aboutWindowOpen(this.state.currentZ, e)}/> */}
          <AboutFolder text='network' src={iconNetwork} alt='network-icon' action={this.props.networkWindowOpen}/>
        </div>
        <About2 aboutZ={this.state.aboutZ} setZ={this.setZ} currentZ={this.state.currentZ} />
        <AboutImage2 />
        <AboutTxt2 />
        <Network2 networkZ={this.state.networkZ} setZ={this.setZ} currentZ={this.state.currentZ} />
        <Bottombar />
      </div>
    );
  } 
}

export default connect(mapStateToProps.app, mapDispatchToProps)(App);