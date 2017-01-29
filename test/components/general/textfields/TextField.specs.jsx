import 'jsdom-global/register';
import React from 'react';
import chai from 'chai';
chai.should();
import { mount } from 'enzyme';

import TextField from 'components/general/textfields/TextField';

describe('<TextField />', () => {

  // TODO remove
  it('calls componentDidMount', () => {
    const wrapper = mount(<TextField onChange={() => {}} />);
    wrapper.find("div").should.not.equal(42);
  });

});