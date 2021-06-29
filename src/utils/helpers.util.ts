import {Movie, MovieData} from '@/types/movie.type';

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
