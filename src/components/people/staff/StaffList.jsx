import React from 'react';

import { sortBy, ascending } from '../../../lib/orderings.js';
import ListSorter from '../../general/ListSorter.jsx';
import StaffMember from './StaffMember.jsx';

class StaffList extends React.Component {

    constructor(props) {
        super(props);
        this._sort = this._sort.bind(this);
        this._onStaffChange = this._onStaffChange.bind(this);
        this.state = { 
            sortedStaff: this.props.staff.map((v, i) => Object.assign({}, v, { key: i.toString() })),
            sortingOptions: [
                { key: 'firstName', label: 'first name', sortingFunc: sortBy(x => x.firstName) },
                { key: 'secondName', label: 'surname', sortingFunc: sortBy(x => x.lastName), isSelected: true }
            ]
        };
    }

    render() {
        return (
            <div>
                <ListSorter label="Sort by" onSort={this._sort} sortingOptions={this.state.sortingOptions} />
                {
                    this.state.sortedStaff.map(s => 
                        <StaffMember {...s} listKey={s.key} onChange={this._onStaffChange} />
                    )
                }
            </div>
        );
    }

    _sort(func) {
        const sortedStaff = this.state.sortedStaff.sort(func);
        this.setState({ sortedStaff });
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
    staff: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export { StaffList as default }