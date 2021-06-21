import React from 'react';
import {shallow} from 'enzyme';
import {Footer} from './footer.component';

describe('Footer component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<Footer />);
    expect(component.find('.footer').exists()).toBeTruthy();
  });
});
