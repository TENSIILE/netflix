import React from 'react';
import {shallow, mount} from 'enzyme';
import {SearchOptionsMovie} from './search-options-movie.component';
import {SearchOptions} from './search-options.component';
import {searchOptionsClassName} from './search-options-classname';
import {tabsContainerClassName} from '@/components/tabs/tabs-container-classname';

describe('SearchOptionsMovie component', () => {
  test('Should not mounted array a genres without prop "genres"', () => {
    const component = shallow(<SearchOptionsMovie />);
    const wrapper = component.find('p').find('span').text();
    expect(wrapper).toBe('');
  });

  test('Should show a list of genres via &', () => {
    const genres = ['Fantasy', 'Drama'];

    const component = shallow(<SearchOptionsMovie genres={genres} />);
    const wrapper = component.find('span').text();
    expect(wrapper).toBe(genres.join(' & '));
  });
});

describe('SearchOptions component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<SearchOptions />);
    expect(component).toMatchSnapshot();
  });

  test('Should render count movies with prop "countMovies"', () => {
    const component = shallow(<SearchOptions countMovies={5} />);

    const wrapper = component.find(`.${searchOptionsClassName}__count_of_movies_found`).text();
    expect(wrapper).toBe('5 movies found');
  });

  test('Should perform the function "OnSelect" when you click on the tab', () => {
    const tabs = [
      {
        id: 1,
        title: 'First',
      },
      {
        id: 2,
        title: 'Second',
      },
    ];
    const mockCallback = jest.fn();

    expect(mockCallback.mock.calls.length).toBe(0);
    const component = mount(<SearchOptions sortTabs={tabs} onSelect={mockCallback} />);
    component.find(`.${tabsContainerClassName}__item`).first().simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
