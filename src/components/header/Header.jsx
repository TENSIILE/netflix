import React from 'react';
import {Link} from 'react-router-dom';
import {Input, Tabs, Button} from '../../components';
import './Header.scss';

export const Header = ({
  input,
  tabs,
  onToggleTabs,
  onChangeInput,
  onSearchMovies,
  onKeyPressEnterHandler,
}) => (
  <div className="header">
    <div className="header__nav">
      <h3 className="header__title">Netflixroulette</h3>
    </div>
    <div className="header__body">
      <div className="input">
        <h3>Find your movie</h3>
        <Input
          placeholder="Enter movie title or genre"
          value={input}
          onChange={onChangeInput}
          onKeyPress={onKeyPressEnterHandler}
        />
      </div>
    </div>
    <div className="header__footer">
      <Tabs.Container>
        <Tabs tabs={tabs} onSelect={onToggleTabs} />
      </Tabs.Container>
      <Button onClick={onSearchMovies}>Search</Button>
    </div>
  </div>
);

Header.Movie = ({poster_path, release_date, tagline, title, vote_average, overview, runtime}) => (
  <div className="header">
    <div className="header__nav">
      <h3 className="header__title">Netflixroulette</h3>
      <Link to="/">
        <Button className="btn__link">Search</Button>
      </Link>
    </div>
    <div className="header__body header__info_movie">
      <div className="header__poster">
        <img src={poster_path} alt="" />
      </div>
      <div className="header__text_movie">
        <div className="header__text_movie_head">
          <h3 className="header__title_movie">{title}</h3>
          {!!vote_average && <span className="header__rating_movie">{vote_average}</span>}
        </div>
        <small>{tagline}</small>
        <div className="header__duration_release_movie">
          <span className="header__release_movie">
            {release_date && new Date(release_date).getFullYear().toString()}
          </span>
          {runtime && <span className="header__duration_movie">{runtime} min</span>}
        </div>
        <div className="header__description_movie">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  </div>
);
