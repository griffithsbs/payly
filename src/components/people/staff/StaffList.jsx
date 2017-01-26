import React from 'react';

import { sortingFuncs, ascending, oppositeOf } from '../../../lib/orderings.js';
const byName = sortingFuncs.byName;
import SortButton from '../../general/SortButton.jsx';
import StaffMember from './StaffMember.jsx';

class StaffList extends React.Component {

    constructor(props) {
        super(props);
        this._sortByName = this._sortByName.bind(this);
        this._onStaffChange = this._onStaffChange.bind(this);
        this.state = { 
            sortedStaff: this.props.staff.map((v, i) => Object.assign({}, v, { key: i.toString() })),
            sortingDirection: ascending,
            sortingFunction: byName.ascending
        };
    }
// TODO radios to allow different sorting funcs to be chosen
    render() {
        return (
            <div>
                <SortButton label="Sort by name" onSort={this._sortByName} direction={this.state.sortingDirection} />
                {this.state.sortedStaff.map(s => <StaffMember {...s} listKey={s.key} onChange={this._onStaffChange} />)}
            </div>
        );
    }

    _sortByName() {
        const sortedStaff = this.state.sortedStaff.sort(this.state.sortingFunction);
        this.setState({
            sortedStaff,
            sortingDirection: oppositeOf(this.state.sortingDirection),
            sortingFunction: oppositeOf(this.state.sortingFunction)
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