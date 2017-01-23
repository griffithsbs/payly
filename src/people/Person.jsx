import React from 'react';

import PersonName from './names/PersonName.jsx';

class Person extends React.Component {
    render() {
        return ( 
            <div>
                <PersonName firstName={this.props.firstName} lastName={this.props.lastName} />
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

Person.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string
}

export { Person as default }