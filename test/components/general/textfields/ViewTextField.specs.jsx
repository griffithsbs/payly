import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ViewTextField from 'components/general/textfields/ViewTextField';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();

describe('<ViewTextField />', () => {
    it('displays the value', () => {
        const fieldValue = 'Met a little girl from Cedartown, Georgia';
        const testSubject = shallow(<ViewTextField value={fieldValue} />);

        testSubject.find('div').first().should.contain.text(fieldValue);
    });

    describe('when the edit button is clicked', () => {
        it('calls the edit handler', () => {
            const editHandler = sinon.spy();
            const testSubject = mount(<ViewTextField onEdit={editHandler} />);

            testSubject.find('button').simulate('click');

            editHandler.should.have.been.calledOnce;
        });
    });
});
