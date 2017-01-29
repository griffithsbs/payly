import 'jsdom-global/register';
import React from 'react';
import chai from 'chai';
chai.should();
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { mount } from 'enzyme';

import TextField from 'components/general/textfields/TextField';

describe('<TextField />', () => {

  // TODO remove
  it('fake test', () => {
    const wrapper = mount(<TextField onChange={() => {}} />);
    wrapper.find("div").should.not.have.className('SueCook');
  });

});