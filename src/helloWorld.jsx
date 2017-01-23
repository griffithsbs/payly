import React from 'react';
import ReactDOM from 'react-dom';

import Person from './components/people/Person.jsx';
import StaffList from './components/people/staff/StaffList.jsx';

import message from './helloWorld2.js';

const staff = [
  { firstName: 'Bob', lastName: 'Jones', emailAddress: 'bob@bobster.com' },
  { firstName: 'Cressida', lastName: 'Smith', phoneNumber: '0xxxx 1234 56' }
];

ReactDOM.render(
  <div>{message}</div>,
  document.getElementById('helloWorld')
);
ReactDOM.render(
  <StaffList staff={staff} />,
  document.getElementById('staffList')
);