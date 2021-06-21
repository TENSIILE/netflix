import React from 'react';
import {shallow} from 'enzyme';
import {ErrorBoundary} from './error-boundary.component';

describe('ErrorBoundary component', () => {
  test('Should render the children', () => {
    const component = shallow(
      <ErrorBoundary>
        <h1>Hello world</h1>
      </ErrorBoundary>
    );

    expect(component).toMatchSnapshot();
  });
});
