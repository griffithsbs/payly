import React from 'react';

import { ascending, descending } from 'lib/orderings.js';

class SortButton extends React.Component {

    constructor(props) {
        super(props);
        this._getLabelFor = this._getLabelFor.bind(this);
    }

    render() {
        return <button onClick={this.props.onSort}>{this.props.label} ({this._getLabelFor(this.props.direction)})</button>;
    }

    // TODO
    _getLabelFor(direction) {
        if(direction === ascending) {
            return 'a-z';
        }
        if(direction === descending) {
            return 'z-a';
        }
        throw new Error('unrecognised direction');
    }

}

SortButton.propTypes = {
    label: React.PropTypes.string.isRequired,
    onSort: React.PropTypes.func.isRequired,
    direction: React.PropTypes.string
};

export { SortButton as default }