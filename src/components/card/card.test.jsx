import React from 'react';
import {shallow} from 'enzyme';
import {CardContainer} from './card-container.component';
import {Card} from './card.component';

describe('CardContainer component', () => {
  test('Should mounted children components', () => {
    const component = shallow(
      <CardContainer>
        <h1>Hello world</h1>
      </CardContainer>
    );

    expect(component).toMatchSnapshot();
  });

  test('Should mounted default value', () => {
    const component = shallow(<CardContainer />);
    expect(component.find('.cards_container__not_found').text()).toBe('No films found');
  });
});

describe('Card component', () => {
  test('Should render props component', () => {
    const props = {
      id: 1,
      title: 'Hello world',
      posterPath: '',
      releaseDate: '2021',
      genres: ['Horror', 'Action'],
    };
    const component = shallow(<Card {...props} />);
    expect(component).toMatchSnapshot();
  });
});
