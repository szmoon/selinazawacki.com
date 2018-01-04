import React from 'react';
import { render } from 'react-dom';
import './assets/style.css';

import { Provider } from 'react-redux';
// default  exportstore, named export history
import store, { history } from './store';

import App from './containers/App';

const router = (
    <Provider store={store}>
      <App /> 
    </Provider>
)

render(router, document.getElementById('mount'));
