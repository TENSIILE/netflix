import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'enzyme';
import {Routes} from './routes.component';

describe('Routes component', () => {
  test('Should mounted the component', () => {
    const component = render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
