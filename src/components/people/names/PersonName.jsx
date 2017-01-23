import React from 'react';

import EditPersonName from './EditPersonName.jsx';
import ViewPersonName from './ViewPersonName.jsx';

class PersonName extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const nameProps = Object.assign({}, { firstName : this.state.firstName, lastName: this.state.lastName });
        return this.state.isEditable ?
            <EditPersonName {...nameProps} onSave={this._onSave.bind(this)} /> :
            <ViewPersonName {...nameProps} onEdit={this._onEdit.bind(this)} /> ;
    }

    _onEdit() {
        this.setState({ isEditable: true });
    }

    _onSave(value) {
        this.setState(Object.assign({}, value, { isEditable: false }));
    }

}

PersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    isEditable: React.PropTypes.bool 
}

export { PersonName as default }