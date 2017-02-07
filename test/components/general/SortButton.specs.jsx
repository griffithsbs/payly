import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SortButton from 'components/general/SortButton';
import { ascending, descending } from 'lib/orderings';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();
const expect = chai.expect;

describe('<SortButton />', () => {
    const label = 'I could not hold onto her very long';
    const ascendingDirectionLabel = '(a-z)';
    const descendingDirectionLabel = '(z-a)';

    it('throws if direction is unrecognised', () => {
        expect(() => shallow(
          <SortButton label="x" onSort={() => {}} direction="not a direction, no sirree" />
        )).to.throw('unrecognised direction');
    });

    describe('renders a button with the given label', () => {
        it('and ascending direction label if direction is ascending', () => {
            const testSubject = shallow(
              <SortButton label={label} direction={ascending} onSort={() => {}} />
            );
            testSubject.should.have.text(`${label} ${ascendingDirectionLabel}`);
        });

        it('and descending direction label if direction is descending', () => {
            const testSubject = shallow(
              <SortButton label={label} direction={descending} onSort={() => {}} />
            );
            testSubject.should.have.text(`${label} ${descendingDirectionLabel}`);
        });
    });

    it('calls the sort handler when clicked', () => {
        const sortHandler = sinon.spy();
        const testSubject = shallow(
          <SortButton label="some label" direction={ascending} onSort={sortHandler} />
        );
        testSubject.simulate('click');
        sortHandler.should.have.been.called;
    });
});
