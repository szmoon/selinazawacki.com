import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import rootReducer from './reducers/index';

// create an obj for the default data
const defaultState = {
  aboutWindow: {
    open: false,
    position:[400, 50],
    zIndex: 0
  },
  aboutTxt: {
    open: false,
    position:[80, 300],
    zIndex: 0
  },
  contactTxt: {
    open: false,
    position:[450, 480],
    zIndex: 0
  },
  aboutImage: {
    open: false,
    position:[660, 150],
    zIndex: 0
  },
  networkWindow: {
    open: false,
    position: [370, 400],
    zIndex: 0
  }
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;