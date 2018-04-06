import React from 'react';

import EditTextField from 'components/general/textfields/EditTextField'; // eslint-disable-line no-unused-vars
import ViewTextField from 'components/general/textfields/ViewTextField'; // eslint-disable-line no-unused-vars

class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = props; // TODO clone values instead of copying reference
        this._onSave = this._onSave.bind(this);
        this._onEdit = this._onEdit.bind(this);
    }

    render() {
        const childProps = { value: this.state.value, listKey: this.props.listKey };
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
    listKey: React.PropTypes.string.isRequired,
};

export { TextField as default }