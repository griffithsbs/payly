import React from 'react';

const ViewTextField = props => 
    <div>{props.value} <button onClick={props.onEdit}>Edit</button></div>;

export { ViewTextField as default }