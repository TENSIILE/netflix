import React from 'react';
import {Link} from 'react-router-dom';
import './card.style.scss';

interface CardProp {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: string[];
}

const cardClassName = 'card';

export const Card: React.FC<CardProp> = ({id, title, posterPath, releaseDate, genres}) => (
  <Link to={`/film?id=${id}`}>
    <div className={cardClassName}>
      <img className={`${cardClassName}__preview`} src={posterPath} alt="" />
      <div className={`${cardClassName}__content`}>
        <div className={`${cardClassName}__text`}>
          <p className={`${cardClassName}__title`}>{title}</p>
          <small className={`${cardClassName}__year_release`}>
            {new Date(releaseDate).getFullYear().toString()}
          </small>
        </div>
        <span className={`${cardClassName}__genre`}>{genres.join(' & ')}</span>
      </div>
    </div>
  </Link>
);
