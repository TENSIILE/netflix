import {AnyAction, Dispatch} from 'redux';
import {
  SEARCH_MOVIES,
  UPLOAD_CACHE_MOVIES,
  INIT_FETCH_MOVIES,
  LOAD_SIMILAR_MOVIES_BY_GENRE,
  LOAD_CURRENT_MOVIE,
} from '@/redux/types/movies.type';
import {Movie, MovieData} from '@/types/movie.type';
import {
  mapMovieDataArrayToMovie,
  mapMovieDataToMovie,
  setURL,
  getURLParams,
} from '@/utils/helpers.util';
import {request} from '@/utils/http.utils';

const searchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: SEARCH_MOVIES,
  payload: movies,
});

const initFetchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: INIT_FETCH_MOVIES,
  payload: movies,
});

const loadCurrentMovieAction = (movie: Movie): AnyAction => ({
  type: LOAD_CURRENT_MOVIE,
  payload: movie,
});

const loadSimilarMoviesByGenreAction = (movies: Movie[]): AnyAction => ({
  type: LOAD_SIMILAR_MOVIES_BY_GENRE,
  payload: movies,
});

export const sortMoviesAction = (movies: Movie | Movie[]): AnyAction => ({
  type: SEARCH_MOVIES,
  payload: movies,
});

export const uploadCacheMoviesAction = (): AnyAction => {
  setURL('/');
  return {
    type: UPLOAD_CACHE_MOVIES,
  };
};

export const searchMoviesAction = (input: string, activeTab: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    setURL(`/search?search=${input}`);

    const {data} = await request(`/movies?search=${input}&searchBy=${activeTab}`);
    dispatch(searchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
  };
};

export const initFetchMoviesAction = (activeTab: string) => {
  return async (dispatch: Dispatch): Promise<AnyAction | void> => {
    const search = getURLParams('search');

    if (search) {
      const {data} = await request(`/movies?search=${search}&searchBy=${activeTab}`);
      return dispatch(searchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
    }

    const {data} = await request('/movies?sortBy=vote_average&sortOrder=desc');
    dispatch(initFetchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
  };
};

export const uploadSelectedMovieAction = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const id = getURLParams('id');

    const res: MovieData = await request(`/movies/${id}`);
    dispatch(loadCurrentMovieAction(mapMovieDataToMovie(res)));

    const {data} = await request(`/movies?filter=${res.genres.join(',')}`);

    const movies = data.filter((movie: Movie) => movie.id.toString() !== id?.toString());
    dispatch(loadSimilarMoviesByGenreAction(mapMovieDataArrayToMovie(movies)));
  };
};
