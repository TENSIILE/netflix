import React from 'react';
import {shallow} from 'enzyme';
import {HeaderMovie} from './header-movie.component';
import {Header} from './header.component';
import {headerClassName} from './header-classname';

describe('HeaderMovie component', () => {
  test('Should render props component', () => {
    const props = {
      posterPath: '',
      releaseDate: '2021',
      tagline: '',
      title: 'Movie',
      voteAverage: 7.5,
      overview: 'Super movie',
      runtime: 70,
    };
    const component = shallow(<HeaderMovie {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('Should not render the "releaseDate" if it is not there', () => {
    const component = shallow(<HeaderMovie />);
    const wrapper = !!component.find(`.${headerClassName}__release_movie`).text();
    expect(wrapper).toBeFalsy();
  });

  test('Should display the image if the "posterPath" property is passed', () => {
    const component = shallow(<HeaderMovie posterPath="Path" />);
    const image = component.find(`.${headerClassName}__poster`).find('img').exists();
    expect(image).toBeTruthy();
  });
});

describe('Header component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
