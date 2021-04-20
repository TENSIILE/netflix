import React from 'react';
import {shallow} from 'enzyme';
import {App} from './app.component';

describe('Initial rendering test of the entire application', () => {
  test('Mount the App', () => {
    const app = shallow(<App />);

    expect(app.find('.container').exists()).toBe(true);
  });
});
