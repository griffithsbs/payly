import React from 'react';

import { ascending, reverse } from 'lib/orderings';

import SortButton from 'components/general/SortButton';
import RadioButtonGroup from 'components/general/RadioButtonGroup';

const defaultSortDirection = ascending;

class ListSorter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortingOptions: this.props.sortingOptions.map(o => Object.assign({}, o, { defaultSortingFunc: o.sortingFunc })),
            sortDirection: defaultSortDirection
        };

        const selectedStrategies = this._getSelectedStrategies();
        if(!selectedStrategies || !selectedStrategies.length) throw new Error('no strategy selected');
        if(selectedStrategies.length > 1) throw new Error('more than one strategy selected');
        
        this._onSortStrategySelected = this._onSortStrategySelected.bind(this);
        this._getSortingFuncFor = this._getSortingFuncFor.bind(this);
        this._onSort = this._onSort.bind(this);
    }

    render() {
        return (
            <div>
                <SortButton label={this.props.label} onSort={this._onSort} direction={this.state.sortDirection} />
                <RadioButtonGroup buttons={this.state.sortingOptions} onSelected={this._onSortStrategySelected} />
            </div>
        );
    }

    _onSortStrategySelected(strategy) {
        const sortingOptions = this.state.sortingOptions.map(o => 
            Object.assign({}, o, { isSelected: o.key === strategy, sortingFunc: o.defaultSortingFunc })
        );
        this.setState({
            sortingOptions,
            sortDirection: defaultSortDirection
        });
    }

    _getSortingFuncFor(strategy) {
        return this.state.sortingOptions.filter(x => x.strategy === strategy)[0].sortingFunc;
    }
// TODO remove repetition
    _getSelectedSortingFunc() {
        return this._getSelectedStrategy().sortingFunc;
    }

    _getSelectedStrategy() {
        return this._getSelectedStrategies()[0];
    }

    _getSelectedStrategies() {
        return this.state.sortingOptions.filter(x => x.isSelected);
    }

    _onSort() {
        this.props.onSort(this._getSelectedSortingFunc());
        const sortingOptions = this.state.sortingOptions.map(o => {
            const sortingFunc = o.isSelected ? reverse(o.sortingFunc) : o.sortingFunc;
            return Object.assign({}, o, { sortingFunc });
        });

        this.setState({
            sortingOptions,
            sortDirection: reverse(this.state.sortDirection)
        });
    }

}

ListSorter.propTypes = {
    label: React.PropTypes.string.isRequired,
    onSort: React.PropTypes.func.isRequired,
    sortingOptions: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            key: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired,
            sortingFunc: React.PropTypes.func.isRequired,
        })
    ).isRequired,
};

export { ListSorter as default };
