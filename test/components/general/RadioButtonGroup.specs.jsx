import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it, beforeEach } from 'mocha';
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
            testSubject.forEach(n => n.should.be.blank());
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
        let selectedHandler;
        let buttons;

        beforeEach(() => {
            selectedHandler = sinon.spy();
            buttons = [
                {
                    key: '1',
                    label: 'Like a drunk in a midnight choir'
                },
                {
                    key: '2',
                    label: 'Like a drunk in a midnight choir',
                    isSelected: true
                },
                {
                    key: '3',
                    label: 'I have tried in my way to be free'
                },
            ];
        });

        it('displays the labels for the buttons, prefixed by a single space', () => {
            const testSubject = mount(
              <RadioButtonGroup buttons={buttons} onSelected={() => {}} />
            );
            const labelElements = testSubject.find('label');
            let i = 0;
            labelElements.forEach(w => w.should.have.text(` ${buttons[i++].label}`));
        });
        it('displays the labels for the buttons, prefixed by a single space', () => {
            const testSubject = mount(
              <RadioButtonGroup buttons={buttons} onSelected={() => {}} />
            );
            const labelElements = testSubject.find('label');
            let i = 0;
            labelElements.forEach(w => w.should.have.text(` ${buttons[i++].label}`));
        });

        describe('the selected button', () => {
            it('displays a checked radio button', () => {
                const testSubject = mount(
                  <RadioButtonGroup buttons={buttons} onSelected={() => {}} />
                );
                testSubject.find('input').at(1).should.have.prop('checked', true);
            });
            describe('when the button is de-selected', () => {
                it('does not invoke the selected handler with the key', () => {
                    const testSubject = mount(
                      <RadioButtonGroup buttons={buttons} onSelected={selectedHandler} />
                    );
                    const radioInput = testSubject.find('input').at(1);
                    radioInput.get(0).checked = false;
                    radioInput.simulate('change');

                    selectedHandler.should.not.have.been.called;
                });
            });
        });

        describe('the other (de-selected) buttons', () => {
            it('displays an unchecked radio button', () => {
                const testSubject = mount(
                  <RadioButtonGroup buttons={buttons} onSelected={() => {}} />
                );
                testSubject.find('input').at(0).should.have.prop('checked', false);
                testSubject.find('input').at(2).should.have.prop('checked', false);
            });
            describe('when the button is selected', () => {
                it('invokes the selected handler with the key', () => {
                    const testSubject = mount(
                      <RadioButtonGroup buttons={buttons} onSelected={selectedHandler} />
                    );
                    const radioInputs = testSubject.find('input')

                    radioInputs.at(0).get(0).checked = false;
                    radioInputs.at(0).simulate('change');

                    selectedHandler.should.have.been.calledWith(buttons[0].key);

                    radioInputs.at(2).get(0).checked = false;
                    radioInputs.at(2).simulate('change');

                    selectedHandler.should.have.been.calledWith(buttons[2].key);
                });
            });
        });
    });
});
