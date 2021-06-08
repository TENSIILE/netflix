import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import {waitFor} from '@testing-library/react';
import {IndexPage} from './index.page';
import {tabsContainerClassName} from '@/components/tabs/tabs-container-classname';

const state = {
  data: [
    {
      id: 1,
      title: 'Fifty Shades Freed',
      tagline: "Don't miss the climax",
      vote_average: 6.1,
      genres: ['drama'],
      releaseDate: '01.01.2021',
      posterPath: '',
    },
    {
      id: 2,
      title: 'Zootopia',
      tagline: 'Welcome to the urban jungle',
      vote_average: 7.7,
      genres: ['horror', 'action'],
      releaseDate: '05.01.2021',
      posterPath: '',
    },
  ],
};

const mockJsonPromise = Promise.resolve(state);
const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

let component;

beforeEach(() => {
  component = mount(
    <BrowserRouter>
      <IndexPage />
    </BrowserRouter>
  );
});

describe('IndexPage component', () => {
  test('Should mounted the component', async () => {
    await waitFor(() => {
      expect(component.find('.index_page').exists()).toBeTruthy();
    });
  });

  test('Should set the class when clicking on tab', async () => {
    await waitFor(() => {
      const tab = component.find(`.${tabsContainerClassName}__item`).last();
      tab.simulate('click');

      expect(tab.hasClass(`${tabsContainerClassName}__item--active`)).toBeTruthy();
    });
  });

  test('Should display the typed characters from the keyboard in a text field', async () => {
    await waitFor(() => {
      const input = component.find('.index_page input.input_field');

      input.simulate('change', {target: {value: 'Horror'}});
      expect(input.prop('value')).toBe('Horror');
    });
  });
});
