import React from 'react';

import Person from '../Person.jsx';

class StaffList extends React.Component {
    render() {
        let index = 0;
        return (
            <div>
                {this.props.staff.map(s => <Person {...s} key={index++} />)}
            </div>
        );
    }
}

StaffList.propTypes = {
    staff: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired
};

export { StaffList as default }