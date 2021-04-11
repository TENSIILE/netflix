import React, {Component} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '../../components';
import {IMovieState, IMovie} from '../../interfaces/pages';
import config from '../../config.json';

export class MoviePage extends Component<any, IMovieState> {
  constructor(props: any) {
    super(props);

    this.state = {
      current_movie: {} as IMovie,
      similar_movies_by_genre: [],
    };
  }

  componentDidMount(): void {
    const url = new URLSearchParams(location.search);
    const id = url.get('id');

    fetch(`${config.SERVER_API}/movies/${id}`)
      .then(res => res.json())
      .then((res: IMovie) => {
        this.setState(prev => ({...prev, current_movie: res}));

        fetch(`${config.SERVER_API}/movies?filter=${res.genres.join(',')}`)
          .then(res => res.json())
          .then(res => {
            const movies = res.data.filter(
              (movie: IMovie) => movie.id.toString() !== id?.toString()
            );
            this.setState(prev => ({...prev, similar_movies_by_genre: movies}));
          });
      });
  }

  render(): JSX.Element {
    return (
      <div className="certain_movie content">
        <HeaderMovie {...this.state.current_movie} />
        <SearchOptionsMovie genres={this.state.current_movie.genres} />
        <CardContainer>
          {this.state.similar_movies_by_genre.length &&
            this.state.similar_movies_by_genre.map(movie => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                genres={movie.genres}
              />
            ))}
        </CardContainer>
        <Footer />
      </div>
    );
  }
}
