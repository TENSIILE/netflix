import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss';

const cardClassName = 'card';

export const Card = ({id, title, poster, releaseYear, genres}) => (
  <Link to={`/film?id=${id}`}>
    <div className={cardClassName}>
      <img className={`${cardClassName}__preview`} src={poster} alt="" />
      <div className={`${cardClassName}__content`}>
        <div className={`${cardClassName}__text`}>
          <p className={`${cardClassName}__title`}>{title}</p>
          <small className={`${cardClassName}__year_release`}>
            {new Date(releaseYear).getFullYear().toString()}
          </small>
        </div>
        <span className={`${cardClassName}__genre`}>{genres.join(' & ')}</span>
      </div>
    </div>
  </Link>
);
