import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import aboutWindow from './aboutWindow';
import aboutImage from './aboutImage';
import aboutTxt from './aboutTxt';
import contactTxt from './contactTxt';
import networkWindow from './networkWindow';
import icons from './icons';

const rootReducer = combineReducers({aboutWindow, aboutImage, aboutTxt, contactTxt, networkWindow, icons, routing: routerReducer});

export default rootReducer;