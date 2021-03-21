import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss';

const _classname = 'card';

export const Card = ({id, title, poster, releaseYear, genres}) => (
  <Link to={`/film?id=${id}`}>
    <div className={_classname}>
      <img className={`${_classname}__preview`} src={poster} alt="" />
      <div className={`${_classname}__content`}>
        <div className={`${_classname}__text`}>
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
