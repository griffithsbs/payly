import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import ViewPersonName from 'components/people/names/ViewPersonName';
import ViewTextField from 'components/general/textfields/ViewTextField';

chai.use(chaiEnzyme());
chai.should();

describe('<ViewPersonName />', () => {
    describe('renders a <ViewTextField />', () => {
        it('with the given first and last name', () => {
            const firstName = 'Jerry';
            const lastName = 'Garcia';
            const testSubject = shallow(
              <ViewPersonName firstName={firstName} lastName={lastName} onEdit={() => {}} />
            );
            testSubject.find(ViewTextField).should.have.prop('value', `${firstName} ${lastName}`);
        });

        it('with the given edit handler', () => {
            const editHandler = () => {};
            const testSubject = shallow(
              <ViewPersonName lastName="Pigpen" onEdit={editHandler} />
            );
            testSubject.find(ViewTextField).should.have.prop('onEdit', editHandler);
        });
    });
});
