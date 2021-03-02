import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss';

export const Card = ({id, title, poster, releaseYear, genres}) => (
  <Link to={`/film?id=${id}`}>
    <div className="card">
      <img className="card__preview" src={poster} alt="" />
      <div className="card__content">
        <div className="card__text">
          <p className="card__title">{title}</p>
          <small className="card__year_release">
            {new Date(releaseYear).getFullYear().toString()}
          </small>
        </div>
        <span className="card__genre">{genres.join(' & ')}</span>
      </div>
    </div>
  </Link>
);

Card.Container = ({children}) => {
  if (!children) {
    return (
      <div className="cards_container">
        <p className="cards_container__not_found">No films found</p>
      </div>
    );
  }

  return (
    <div className="cards_container">
      <div className="cards_container__grid">{children}</div>
    </div>
  );
};
