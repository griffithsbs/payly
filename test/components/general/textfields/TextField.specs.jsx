import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();

import TextField from 'components/general/textfields/TextField';  // eslint-disable-line no-unused-vars
import EditTextField from 'components/general/textfields/EditTextField';
import ViewTextField from 'components/general/textfields/ViewTextField';

describe('<TextField />', () => {

  const noop = () => {};

  it('is not editable by default', () => {
    const testSubject = mount(<TextField onChange={noop} />);
    testSubject.should.have.exactly(1).descendants(ViewTextField);
    testSubject.should.not.have.descendants(EditTextField);
    // TODO should be able to just do something like:
    // testSubject.should.contain(<ViewTextField />);
  });

  describe('given a read-only text field', () => {

    it('displays the value', () => {
      const fieldValue = 'Here we go again';
      const testSubject = mount(<TextField onChange={noop} value={fieldValue} />);

      testSubject.find(ViewTextField).first().should.have.prop('value').equal(fieldValue);
    });

    it('passes down the list key', () => {
      const listKey = "She's back in town again";
      const testSubject = mount(<TextField onChange={noop} listKey={listKey} />);

      testSubject.find(ViewTextField).first().should.have.prop('listKey').equal(listKey);
    });

    describe('when the edit button is clicked', () => {

      it('becomes editable', () => {
        const testSubject = mount(<TextField onChange={noop} />);

        testSubject.find('button').simulate('click');

        testSubject.should.have.exactly(1).descendants(EditTextField);
        testSubject.should.not.have.descendants(ViewTextField);
      });

    });

  });

  describe('given an editable text field', () => {

    it('displays the editable value', () => {
      const fieldValue = "I'll take her back again";
      const testSubject = mount(<TextField onChange={noop} value={fieldValue} isEditable={true} />);

      testSubject.find(EditTextField).first().should.have.prop('value').equal(fieldValue);
    });

    describe('when the save button is clicked', () => {

      it('becomes read-only', () => {
        const testSubject = mount(<TextField onChange={noop} isEditable={true} />);

        testSubject.find('button').simulate('click');

        testSubject.should.have.exactly(1).descendants(ViewTextField);
        testSubject.should.not.have.descendants(EditTextField);
      });

      it('the change handler is called with the new field value and the list key', () => {
        const changeHandler = sinon.spy();

        const unchangedFieldValue = 'Bashment boogie';
        const listKey = 'Mind 2 Motion';

        const testSubject = mount(
          <TextField onChange={changeHandler} isEditable={true} value={unchangedFieldValue} listKey={listKey} />
        );
        testSubject.find('button').simulate('click');

        changeHandler.should.have.been.calledWith({ value: unchangedFieldValue, key: listKey });
      });

    });

  });

});