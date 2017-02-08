import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ListSorter from 'components/general/ListSorter';
import SortButton from 'components/general/SortButton';
import RadioButtonGroup from 'components/general/RadioButtonGroup';
import { ascending, descending, sortBy, reverse } from 'lib/orderings';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();
const expect = chai.expect;

describe('<ListSorter />', () => {
    const validSortingOptions = [
        { isSelected: true }
    ];

    it('throws on construction if no sorting strategy selected', () => {
        const props = {
            sortingOptions: []
        };
        expect(() => new ListSorter(props)).to.throw('no strategy selected');
    });

    it('throws on construction if more than one sorting strategy selected', () => {
        const props = {
            sortingOptions: [
                { isSelected: true },
                { isSelected: true }
            ]
        };
        expect(() => new ListSorter(props)).to.throw('more than one strategy selected');
    });

    describe('renders a SortButton', () => {
        it('with the given label', () => {
            const label = `Johnny's in the basement, mixing up the medicine`;
            const testSubject = shallow(
              <ListSorter label={label} onSort={() => {}} sortingOptions={validSortingOptions} />
            );
            testSubject.find(SortButton).first().should.have.prop('label', label);
        });

        it('with the sort handler', () => {
            const testSubject = shallow(
              <ListSorter label="whatever" onSort={() => {}} sortingOptions={validSortingOptions} />
            );
            testSubject.find(SortButton).first().should.have.prop('onSort', SortButton.prototype._onSort);
        });

        it('with a sort direction of ascending by default', () => {
            const testSubject = shallow(
              <ListSorter label="whatever" onSort={() => {}} sortingOptions={validSortingOptions} />
            );
            testSubject.find(SortButton).first().should.have.prop('direction', ascending);
        });
    });

    describe('when the sort button is clicked', () => {
        it('calls the parent sort handler with the selected sorting function', () => {
            const parentSortHandler = sinon.spy();
            const selectedStrategy = { isSelected: true, sortingFunc: () => {}, key: 1 };
            const sortingOptions = [{ key: 0 }, selectedStrategy, { key: 2 }];

            const testSubject = mount(
              <ListSorter label="whatever" onSort={parentSortHandler} sortingOptions={sortingOptions} />
            );
            testSubject.find('button').simulate('click');

            parentSortHandler.should.have.been.calledWith(selectedStrategy.sortingFunc);
        });

        it('reverses the selected sorting function and not those that are not selected', () => {
            const byFooAscending = sortBy(x => x.foo);
            const byFooDescending = reverse(byFooAscending);
            const selectedStrategy = { isSelected: true, sortingFunc: byFooAscending, key: 1 };
            const sortingOptions = [
                { sortingFunc: byFooAscending, key: 0 },
                selectedStrategy,
                { sortingFunc: byFooDescending, key: 2 }
            ];

            const testSubject = mount(
              <ListSorter label="whatever" onSort={() => {}} sortingOptions={sortingOptions} />
            );
            testSubject.find('button').simulate('click');

            testSubject.state().sortingOptions[0].sortingFunc.should.equal(byFooAscending);
            testSubject.state().sortingOptions[1].sortingFunc.should.equal(byFooDescending);
            testSubject.state().sortingOptions[2].sortingFunc.should.equal(byFooDescending);
        });
    });
});
