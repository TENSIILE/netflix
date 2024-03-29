import {Movie, MovieData} from '@/types/movie.type';
import {QueryType} from '@/types';

export const ensure = <T>(
  argument: T | undefined,
  message = 'Произошла ошибка, argument является undefined!'
): T => {
  if (!argument) {
    throw new TypeError(message);
  }

  return argument;
};

export const mapMovieDataToMovie = (movieData: MovieData): Movie => {
  return {
    ...movieData,
    posterPath: movieData.poster_path,
    releaseDate: movieData.release_date,
    voteAverage: movieData.vote_average,
    voteCount: movieData.vote_count,
  };
};

export const mapMovieDataArrayToMovie = (movieDataArray: MovieData[]): Movie[] =>
  movieDataArray.map(mapMovieDataToMovie);

export const getURLParams = (param: QueryType): string | null => {
  return new URLSearchParams(globalThis.location?.search).get(param);
};

export const sortMoviesByVoteAverageOrReleaseDate = (state: Movie[], sortType: string): Movie[] => {
  const stateMovies = [...state];

  if (sortType === 'rating') {
    stateMovies.sort((a, b): number => b.voteAverage - a.voteAverage);
  } else {
    stateMovies.sort(
      (a, b): number => Number(new Date(b.releaseDate)) - Number(new Date(a.releaseDate))
    );
  }

  return stateMovies;
};
