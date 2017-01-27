import React from 'react';

import EditTextField from './EditTextField.jsx';
import ViewTextField from './ViewTextField.jsx';

class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
        this._onSave = this._onSave.bind(this);
        this._onEdit = this._onEdit.bind(this);
    }

    render() {
        const childProps = Object.assign({}, { value: this.state.value, listKey: this.props.listKey });
        return this.state.isEditable ?
            <EditTextField {...childProps} onSave={this._onSave} /> :
            <ViewTextField {...childProps} onEdit={this._onEdit} /> ;
    }

    _onEdit() {
        this.setState({ isEditable: true });
    }

    _onSave(value) {
        this.setState(Object.assign({}, value, { isEditable: false }));
        this.props.onChange(value);
    }

}

TextField.propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    listKey: React.PropTypes.string
}

export { TextField as default }