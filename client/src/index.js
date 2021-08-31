import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // StrictMode checks all descendant components for various issues. Components with unsafe lifecycles, legacy string ref API usage, depreciated findDOMNode usage, unexpected side effects, and legacy context API usage. StrictMode does node render any actual UI components, instead it logs a warning message for each issue it detects.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
