import React from 'react';
import ReactDOM from 'react-dom';

const message = require('babel!./helloWorld2.js');

ReactDOM.render(
  <h1>{`It seems that... ${message}`}</h1>,
  document.getElementById('helloWorld')
);