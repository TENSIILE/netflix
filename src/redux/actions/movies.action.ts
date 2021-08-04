import {AnyAction, Dispatch} from 'redux';
import {SET_DATA_MOVIES, UPLOAD_CACHE_MOVIES, INIT_FETCH_MOVIES} from '@/redux/types/movies.type';
import {Movie} from '@/types/movie.type';
import {mapMovieDataArrayToMovie, getURLParams} from '@/utils/helpers.util';
import {request} from '@/utils/http.utils';

const searchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: SET_DATA_MOVIES,
  payload: movies,
});

const initFetchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: INIT_FETCH_MOVIES,
  payload: movies,
});

export const sortMoviesAction = (movies: Movie[]): AnyAction | void => {
  if (Array.isArray(movies) && movies.length) {
    return {
      type: SET_DATA_MOVIES,
      payload: movies,
    };
  }
};

export const uploadCacheMoviesAction = (): AnyAction => ({
  type: UPLOAD_CACHE_MOVIES,
});

export const searchMoviesAction = (input: string, activeTab: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
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
