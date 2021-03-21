import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../';
import {_classname} from './Header';

export const HeaderMovie = ({
  poster_path,
  release_date,
  tagline,
  title,
  vote_average,
  overview,
  runtime,
}) => (
  <div className={_classname}>
    <div className={`${_classname}__nav`}>
      <h3 className={`${_classname}__title`}>Netflixroulette</h3>
      <Link to="/">
        <Button className="btn__link">Search</Button>
      </Link>
    </div>
    <div className={`${_classname}__body ${_classname}__info_movie`}>
      <div className={`${_classname}__poster`}>
        <img src={poster_path} alt="" />
      </div>
      <div className={`${_classname}__text_movie`}>
        <div className={`${_classname}__text_movie_head`}>
          <h3 className={`${_classname}__title_movie`}>{title}</h3>
          {!!vote_average && <span className={`${_classname}__rating_movie`}>{vote_average}</span>}
        </div>
        <small>{tagline}</small>
        <div className={`${_classname}__duration_release_movie`}>
          <span className={`${_classname}__release_movie`}>
            {release_date && new Date(release_date).getFullYear().toString()}
          </span>
          {runtime && <span className={`${_classname}__duration_movie`}>{runtime} min</span>}
        </div>
        <div className={`${_classname}__description_movie`}>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  </div>
);
