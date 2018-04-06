import React from 'react';

import { ascending, descending } from 'lib/orderings';

const getLabelFor = direction => {
    if(direction === ascending) {
        return 'a-z';
    }
    if(direction === descending) {
        return 'z-a';
    }
    throw new Error('unrecognised direction');
};

const SortButton = props =>
    <button onClick={props.onSort}>{props.label} ({getLabelFor(props.direction)})</button>;

SortButton.propTypes = {
    label: React.PropTypes.string.isRequired,
    onSort: React.PropTypes.func.isRequired,
    direction: React.PropTypes.string.isRequired
};

export { SortButton as default };
