import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);