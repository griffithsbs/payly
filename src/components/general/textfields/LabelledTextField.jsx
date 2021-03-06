import React from 'react';

import TextField from 'components/general/textfields/TextField';

export default function LabelledTextField(props) {
    // TODO use helper function to copy subset of props, e.g. from underscore
    const textFieldProps = {
        value: props.value,
        onChange: props.onChange,
        listKey: props.listKey
    };

    return <div><label>{props.label}</label><TextField {...textFieldProps} /></div>;
}

LabelledTextField.propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    listKey: React.PropTypes.string.isRequired,
};

