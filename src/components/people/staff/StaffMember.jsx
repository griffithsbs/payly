import React from 'react';

import PersonName from '../names/PersonName.jsx';

class StaffMember extends React.Component {
 
    render() {
        return ( 
            <div>
                <PersonName firstName={this.props.firstName} lastName={this.props.lastName} listKey={this.props.listKey} onChange={this.props.onChange} />
                <div>
                    <span>Email: {this.props.emailAddress}</span>
                </div>
                <div>
                    <span>Phone: {this.props.phoneNumber}</span>
                </div>
            </div>
        );
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