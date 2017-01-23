import React from 'react';

import Person from '../Person.jsx';
import { byName } from '../../../lib/orderings.js';

class StaffList extends React.Component {

    constructor(props) {
        super(props);
        this._sortByName = this._sortByName.bind(this);
        this.state = { 
            sortedStaff: this.props.staff.map((v, i) => Object.assign({}, v, { key: i.toString() }))
        };
    }

    render() {
        let index = 0;
        return (
            <div>
                <button onClick={this._sortByName}>Sort by name (A-Z)</button>
                {this.state.sortedStaff.map(s => <Person {...s} />)}
            </div>
        );
    }

    /**
     * N.B. edits to the staff's names won't be reflected if ordering is re-applied
     */
    _sortByName() {
        const sortedStaff = this.state.sortedStaff.sort(byName);
        this.setState({
            sortedStaff
        });
    }

}

StaffList.propTypes = {
    staff: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
    ordering: React.PropTypes.func
};

export { StaffList as default }