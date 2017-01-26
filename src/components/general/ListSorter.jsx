import React from 'react';

import { ascending } from '../../lib/orderings.js';

class ListSorter extends React.Component {

    constructor(props) {
        super(props);
        this._onSortStrategySelected = this._onSortStrategySelected.bind(this);
        this._getSortingFuncFor = this._getSortingFuncFor.bind(this);
        this._onSort = this._onSort.bind(this);
        this.state = {
            sortingDirection: ascending,
            sortingFunc: this.props.onSort
        };
    }

    // TODO don't need to pass a direction to the SortButton any more
    render() {
        return (
            <div>
                <SortButton label={this.props.label} onSort={this._onSort} direction={this.state.sortingDirection} />
                <RadioButtonGroup buttons={this.props.sortingOptions} onSelected={this._onSortStrategySelected} />
            </div>
        );
    }

    _onSortStrategySelected(strategy) {
        this.setState({
            sortingFunc: this._getSortingFuncFor(strategy)
        });
    }

    _getSortingFuncFor(strategy) {
        return this.props.sortingOptions.filter(x => x.value === stratey)[0].sortingFunc;
    }

    _onSort() {
        this.props.onSort(this.state.sortingFunc, this.state.sortingDirection);
    }

}

ListSorter.propTypes = {
    label: React.PropTypes.string.isRequired,
    onSort: React.PropTypes.func.isRequired,
    sortingOptions: React.PropTypes.array.isRequired // TODO arrayOf ?
};

export { ListSorter as default }