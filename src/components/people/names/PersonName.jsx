import React from 'react';

import EditPersonName from 'components/people/names/EditPersonName.jsx';
import ViewPersonName from 'components/people/names/ViewPersonName.jsx';

class PersonName extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
        this._onSave = this._onSave.bind(this);
        this._onEdit = this._onEdit.bind(this);
    }

    render() {
        const nameProps = Object.assign({}, { firstName : this.state.firstName, lastName: this.state.lastName, listKey: this.props.listKey });
        return this.state.isEditable ?
            <EditPersonName {...nameProps} onSave={this._onSave} /> :
            <ViewPersonName {...nameProps} onEdit={this._onEdit} /> ;
    }

    _onEdit() {
        this.setState({ isEditable: true });
    }

    _onSave(value) {
        this.setState(Object.assign({}, value, { isEditable: false }));
        this.props.onChange(value);
    }

}

PersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    isEditable: React.PropTypes.bool,
    listKey: React.PropTypes.string
}

export { PersonName as default }