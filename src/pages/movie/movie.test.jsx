import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, waitFor} from '@testing-library/react';
import {MoviePage} from './movie.page';

const mockJsonPromise = Promise.resolve({id: 1, genres: ['Horror', 'Action']});
const mockJsonPromise2 = Promise.resolve({data: [{id: 1, genres: ['Horror', 'Action']}]});

const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});
const mockFetchPromise2 = Promise.resolve({json: () => mockJsonPromise2});

global.fetch = jest
  .fn()
  .mockImplementationOnce(() => mockFetchPromise)
  .mockImplementationOnce(() => mockFetchPromise2);

describe('MoviePage component', () => {
  test('Should mounted the component', async () => {
    const {getAllByText} = render(
      <BrowserRouter>
        <MoviePage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getAllByText(/Netflixroulette/i)).not.toBeNull();
    });
  });
});
