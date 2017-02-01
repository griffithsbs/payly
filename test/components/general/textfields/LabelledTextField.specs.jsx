import 'jsdom-global/register';
import React from 'react'; // eslint-disable-line no-unused-vars
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import LabelledTextField from 'components/general/textfields/LabelledTextField';
import TextField from 'components/general/textfields/TextField';

chai.use(chaiEnzyme());
chai.should();

describe('<LabelledTextField />', () => {
    it('displays the label', () => {
        const label = `I ain't going to work on Maggie's farm no more`;
        const testSubject = mount(<LabelledTextField label={label} onChange={() => {}} />);

        const labelElement = testSubject.find('label').first();
        labelElement.should.have.text(label);
    });

    it('displays the value in a text field with the given list key and change handler', () => {
        const value = `I ain't going to work for Maggie's mama no more`;
        const listKey = `I ain't going to work for Maggie's brother no more`;
        const changeHandler = () => {};

        const testSubject = shallow(
          <LabelledTextField value={value} listKey={listKey} onChange={changeHandler} />
        );
        const textField = testSubject.find(TextField);

        textField.should.have.props({
            value,
            listKey,
            onChange: changeHandler
        });
    });
});
