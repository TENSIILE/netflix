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
