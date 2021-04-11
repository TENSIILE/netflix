export interface ISimilarMovieProp {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  genres: string[];
}

export interface IMovie extends ISimilarMovieProp {
  budget: number;
  overview: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieState {
  current_movie: IMovie;
  similar_movies_by_genre: IMovie[];
}
