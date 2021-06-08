import React from 'react';
import {shallow} from 'enzyme';
import {Input} from './input.component';

describe('Input component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  test('Should call onChange method', () => {
    const mockCallback = jest.fn();

    const component = shallow(<Input onChange={mockCallback} />);
    expect(mockCallback.mock.calls.length).toBe(0);

    component.find('input').simulate('change');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
