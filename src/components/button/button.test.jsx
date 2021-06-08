import React from 'react';
import {shallow} from 'enzyme';
import {Button} from './button.component';

describe('Button component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<Button>Simple Button</Button>);
    expect(component.find('button').exists()).toBe(true);
  });

  test('Should call onClick method', () => {
    const mockCallback = jest.fn();
    const component = shallow(<Button onClick={mockCallback}>Simple Button</Button>);

    expect(mockCallback.mock.calls.length).toBe(0);
    component.simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
