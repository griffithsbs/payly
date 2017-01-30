import React from 'react';
import ReactDOM from 'react-dom';

import StaffList from 'components/people/staff/StaffList';

import { createStore } from 'redux';

const staff = [
  { firstName: 'Bob', lastName: 'Jones', emailAddress: 'bob@bobster.com' },
  { firstName: 'Darren', lastName: 'Alan', emailAddress: 'darren@alan.com' },
  { firstName: 'Cressida', lastName: 'Smith', phoneNumber: '0xxxx 1234 56' }
];

ReactDOM.render(
  <StaffList staff={staff} />,
  document.getElementById('staffList')
);