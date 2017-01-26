import React from 'react';

import StaffMember from './StaffMember.jsx';
import { byName } from '../../../lib/orderings.js';

class StaffList extends React.Component {

    constructor(props) {
        super(props);
        this._sortByName = this._sortByName.bind(this);
        this._onStaffChange = this._onStaffChange.bind(this);
        this.state = { 
            sortedStaff: this.props.staff.map((v, i) => Object.assign({}, v, { key: i.toString() }))
        };
    }

    render() {
        let index = 0;
        return (
            <div>
                <button onClick={this._sortByName}>Sort by name (A-Z)</button>
                {this.state.sortedStaff.map(s => <StaffMember {...s} listKey={s.key} onChange={this._onStaffChange} />)}
            </div>
        );
    }

    _sortByName() {
        const sortedStaff = this.state.sortedStaff.sort(byName);
        this.setState({
            sortedStaff
        });
    }

    _onStaffChange(changedStaffMember) {
        const sortedStaff = this.state.sortedStaff.map(staffMember => {
            if(staffMember.key == changedStaffMember.key) {
                return changedStaffMember;
            }
            return staffMember;
        });
        this.setState({ sortedStaff });
    }

}

StaffList.propTypes = {
    staff: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
    ordering: React.PropTypes.func
};

export { StaffList as default }