import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import rootReducer from './reducers/index';

// create an obj for the default data
const defaultState = {
  aboutWindow: {
    open: false,
    focus: false,
    left: 450,
    top: 50
  },
  aboutTxt: {
    open: false,
    focus: false,
    left: 80,
    top: 300
  },
  aboutImage: {
    open: false,
    focus: false,
    left: 900,
    top: 150
  },
  networkWindow: {
    open: false,
    focus: false,
    left: 400,
    top: 400
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