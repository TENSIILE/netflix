export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: string[];
  budget: number;
  overview: string;
  revenue: number;
  runtime: number;
  tagline: string;
  voteAverage: number;
  voteCount: number;
}

export interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  genres: string[];
  budget: number;
  overview: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
}
