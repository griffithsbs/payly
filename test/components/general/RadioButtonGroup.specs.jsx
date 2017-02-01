import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RadioButtonGroup from 'components/general/RadioButtonGroup';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should();

describe('<RadioButtonGroup />', () => {
    describe('given an empty collection of buttons', () => {
        it('renders an empty div', () => {
            const testSubject = shallow(<RadioButtonGroup buttons={[]} onSelected={() => {}} />);

            testSubject.should.have.exactly(1).descendants('div');
            testSubject.find('div').first().should.be.blank();
            // TODO how to assert that the testSubject only contains the empty div?
        });
    });

    describe('given one button', () => {
        const key = 'Like a bird on the wire';

        it('displays the label for the button, prefixed by a single space', () => {
            const label = 'Like a drunk in a midnight choir';
            const testSubject = mount(
              <RadioButtonGroup buttons={[{ label, key }]} onSelected={() => {}} />
            );
            testSubject.should.have.exactly(1).descendants('label');

            const labelElement = testSubject.find('label').first();
            labelElement.should.have.text(` ${label}`);
        });

        describe('which is selected', () => {
            it('contains a checked radio button', () => {
                const testSubject = mount(
                  <RadioButtonGroup buttons={[{ isSelected: true, key }]} onSelected={() => {}} />
                );
                testSubject.should.have.exactly(1).descendants('input');
                testSubject.find('input').first().should.have.prop('checked', true);
            });
            describe('when the button is de-selected', () => {
                it('does not invoke the selected handler with the key', () => {
                    const selectedHandler = sinon.spy();
                    const testSubject = mount(
                      <RadioButtonGroup buttons={[{ isSelected: true, key }]} onSelected={selectedHandler} />
                    );
                    const radioInput = testSubject.find('input');
                    radioInput.get(0).checked = false;
                    radioInput.simulate('change');

                    selectedHandler.should.not.have.been.called;
                });
            });
        });

        describe('which is not selected', () => {
            it('contains an unchecked radio button', () => {
                const testSubject = mount(
                  <RadioButtonGroup buttons={[{ isSelected: false, key }]} onSelected={() => {}} />
                );
                testSubject.should.have.exactly(1).descendants('input');
                testSubject.find('input').first().should.have.prop('checked', false);
            });
            describe('when the button is selected', () => {
                it('invokes the selected handler with the key', () => {
                    const selectedHandler = sinon.spy();
                    const testSubject = mount(
                      <RadioButtonGroup buttons={[{ isSelected: false, key }]} onSelected={selectedHandler} />
                    );
                    const radioInput = testSubject.find('input');
                    radioInput.get(0).checked = true;
                    radioInput.simulate('change');

                    selectedHandler.should.have.been.calledWith(key);
                });
            });
        });
    });

    describe('given more than one button', () => {
        // TODO
    });
});
