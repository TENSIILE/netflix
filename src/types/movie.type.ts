export interface Movie {
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
