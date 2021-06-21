import React from 'react';
import {shallow} from 'enzyme';
import {App} from './app.component';

describe('App component', () => {
  test('Should mounted the component', () => {
    const app = shallow(<App />);

    expect(app.find('.container').exists()).toBe(true);
  });
});
