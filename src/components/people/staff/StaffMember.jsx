import React from 'react';

import PersonName from '../names/PersonName.jsx';

class StaffMember extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }
 
    render() {
        return ( 
            <div>
                <PersonName firstName={this.props.firstName} lastName={this.props.lastName} listKey={this.props.listKey} onChange={this._onChange} />
                <div>
                    <span>Email: {this.props.emailAddress}</span>
                </div>
                <div>
                    <span>Phone: {this.props.phoneNumber}</span>
                </div>
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