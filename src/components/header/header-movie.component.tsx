import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '..';
import {headerClassName} from './header-classname';

interface HeaderMovieProp {
  poster_path?: string;
  release_date?: Date;
  tagline?: string;
  title?: string;
  vote_average?: number;
  overview?: string;
  runtime?: number;
}

export const HeaderMovie: React.FC<HeaderMovieProp> = ({
  poster_path,
  release_date,
  tagline,
  title,
  vote_average,
  overview,
  runtime,
}) => (
  <div className={headerClassName}>
    <div className={`${headerClassName}__nav`}>
      <h3 className={`${headerClassName}__title`}>Netflixroulette</h3>
      <Link to="/">
        <Button className="btn__link">Search</Button>
      </Link>
    </div>
    <div className={`${headerClassName}__body ${headerClassName}__info_movie`}>
      <div className={`${headerClassName}__poster`}>
        {poster_path && <img src={poster_path} alt="" />}
      </div>
      <div className={`${headerClassName}__text_movie`}>
        <div className={`${headerClassName}__text_movie_head`}>
          <h3 className={`${headerClassName}__title_movie`}>{title}</h3>
          {!!vote_average && (
            <span className={`${headerClassName}__rating_movie`}>{vote_average}</span>
          )}
        </div>
        <small>{tagline}</small>
        <div className={`${headerClassName}__duration_release_movie`}>
          <span className={`${headerClassName}__release_movie`}>
            {release_date && new Date(release_date).getFullYear().toString()}
          </span>
          {runtime && <span className={`${headerClassName}__duration_movie`}>{runtime} min</span>}
        </div>
        <div className={`${headerClassName}__description_movie`}>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  </div>
);
