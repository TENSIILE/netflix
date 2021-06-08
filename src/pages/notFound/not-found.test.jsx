import React from 'react';
import {shallow} from 'enzyme';
import {NotFoundPage} from './not-found.page';

describe('NotFoundPage component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<NotFoundPage />);
    expect(component.find('.not_found_page').exists()).toBeTruthy();
  });
});
