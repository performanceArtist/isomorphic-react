import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app';
import createStore from './store';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore({ initialState: preloadedState, browser: true });

const jsx = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.hydrate(jsx, document.querySelector('.wrapper'));

function importAll(resolve: any) {
  resolve.keys().forEach(resolve);
}

importAll(
  require.context('./', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/)
);
