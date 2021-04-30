import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@/components';
import {headerClassName} from './header-classname';

interface HeaderMovieProp {
  posterPath?: string;
  releaseDate?: Date;
  tagline?: string;
  title?: string;
  voteAverage?: number;
  overview?: string;
  runtime?: number;
}

export const HeaderMovie: React.FC<HeaderMovieProp> = ({
  posterPath,
  releaseDate,
  tagline,
  title,
  voteAverage,
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
        {posterPath && <img src={posterPath} alt="" />}
      </div>
      <div className={`${headerClassName}__text_movie`}>
        <div className={`${headerClassName}__text_movie_head`}>
          <h3 className={`${headerClassName}__title_movie`}>{title}</h3>
          {!!voteAverage && (
            <span className={`${headerClassName}__rating_movie`}>{voteAverage}</span>
          )}
        </div>
        <small>{tagline}</small>
        <div className={`${headerClassName}__duration_release_movie`}>
          <span className={`${headerClassName}__release_movie`}>
            {releaseDate && new Date(releaseDate).getFullYear().toString()}
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
