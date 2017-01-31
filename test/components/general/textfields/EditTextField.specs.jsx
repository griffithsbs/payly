import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EditTextField from 'components/general/textfields/EditTextField';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();

describe('<EditTextField />', () => {
    describe('on initial display', () => {
        const initialValue = 'Had to walk nearly 3 miles to court her';

        it('displays the initial value', () => {
            const testSubject = mount(<EditTextField value={initialValue} onSave={() => {}} />);
            const textInput = testSubject.find('input');

            textInput.should.have.value(initialValue);
        });

        describe('when the Save button is clicked', () => {
            it('saves the initial value along with the list key', () => {
                const listKey = 'room 23';
                const saveHandler = sinon.spy();
                const testSubject = mount(
                  <EditTextField value={initialValue} listKey={listKey} onSave={saveHandler} />
                );
                testSubject.find('button').simulate('click');

                saveHandler.should.have.been.calledWith({ value: initialValue, key: listKey });
            });
        });
    });

    describe('when the value is edited', () => {
        const initialValue = `Never had much, just a sharecropper's daughter`;
        const updatedValue = 'I married her and took her to New Orleans';

        it('displays the edited value', () => {
            const testSubject = mount(<EditTextField value={initialValue} onSave={() => {}} />);
            const textInput = testSubject.find('input');

            textInput.get(0).value = updatedValue;
            textInput.simulate('change');

            textInput.should.have.value(updatedValue);
        });

        describe('and the Save button is clicked', () => {
            it('saves the new value along with the list key', () => {
                const listKey = 'room 23';
                const saveHandler = sinon.spy();

                const testSubject = mount(
                  <EditTextField value={initialValue} listKey={listKey} onSave={saveHandler} />
                );
                const textInput = testSubject.find('input');

                textInput.get(0).value = updatedValue;
                textInput.simulate('change');
                testSubject.find('button').simulate('click');

                saveHandler.should.have.been.calledWith({ value: updatedValue, key: listKey });
            });
        });
    });

});
