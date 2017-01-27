import React from 'react';

import LabelledTextField from '../../general/textfields/LabelledTextField.jsx';
import PersonName from '../names/PersonName.jsx';

class StaffMember extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }
 
    render() {
        const listKeyAndChangeHandler = {
            listKey: this.props.listKey,
            onChange: this._onChange
        };
        return ( 
            <div>
                <PersonName firstName={this.props.firstName} lastName={this.props.lastName} {...listKeyAndChangeHandler} />
                <LabelledTextField label="Email" value={this.props.emailAddress} {...listKeyAndChangeHandler} />
                <LabelledTextField label="Phone" value={this.props.phoneNumber} {...listKeyAndChangeHandler} />
            </div>
        );
    }

    _onChange(newValue) {
        this.props.onChange(Object.assign({}, this.props, { onChange: null }, newValue));
    }

}

StaffMember.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    listKey: React.PropTypes.string
}

export { StaffMember as default }