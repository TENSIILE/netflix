import React, {Component} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '../../components';
import config from '../../config.json';

export class MoviePage extends Component {
  state = {
    current_movie: {},
    similar_movies_by_genre: [],
  };

  componentDidMount() {
    const url = new URLSearchParams(location.search);
    const id = url.get('id');

    fetch(`${config.SERVER_API}/movies/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState(prev => ({...prev, current_movie: res}));

        fetch(`${config.SERVER_API}/movies?filter=${res.genres.join(',')}`)
          .then(res => res.json())
          .then(res => {
            const movies = res.data.filter(movie => movie.id.toString() !== id.toString());
            this.setState(prev => ({...prev, similar_movies_by_genre: movies}));
          });
      });
  }

  render() {
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
                poster={movie.poster_path}
                releaseYear={movie.release_date}
                genres={movie.genres}
              />
            ))}
        </CardContainer>
        <Footer />
      </div>
    );
  }
}
