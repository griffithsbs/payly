import React from 'react';

const ViewTextField = props => 
    <div>{props.value} <button onClick={props.onEdit}>Edit</button></div>;

ViewTextField.propTypes = {
    value: React.PropTypes.string,
    onEdit: React.PropTypes.func.isRequired,
};

ViewTextField.defaultProps = {
    value: '',
};

export { ViewTextField as default };
