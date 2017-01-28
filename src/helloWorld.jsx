import React from 'react';
import ReactDOM from 'react-dom';

import StaffList from 'components/people/staff/StaffList.jsx';

import message from 'helloWorld2.js';

import { createStore } from 'redux';

const staff = [
  { firstName: 'Bob', lastName: 'Jones', emailAddress: 'bob@bobster.com' },
  { firstName: 'Darren', lastName: 'Alan', emailAddress: 'darren@alan.com' },
  { firstName: 'Cressida', lastName: 'Smith', phoneNumber: '0xxxx 1234 56' }
];

console.log(createStore); // TODO

ReactDOM.render(
  <div>{message}</div>,
  document.getElementById('helloWorld')
);
ReactDOM.render(
  <StaffList staff={staff} />,
  document.getElementById('staffList')
);