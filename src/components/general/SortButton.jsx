import React from 'react';

class SortButton extends React.Component {

    constructor(props) {
        super(props);
        this._sort = this._sort.bind(this);
    }

    render() {
        return <button onClick={this._sort}>{this.props.label}</button>;
    }

    _sort() {
        this.props.onSort();
    }

}

SortButton.propTypes = {
    label: React.PropTypes.string.isRequired,
    sortedDirection: React.PropTypes.string
};

export { SortButton as default }