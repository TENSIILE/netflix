import React from 'react';
import {Link} from 'react-router-dom';
import './card.scss';

interface CardProp {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  genres: string[];
}

const cardClassName = 'card';

export const Card: React.FC<CardProp> = ({id, title, poster_path, release_date, genres}) => (
  <Link to={`/film?id=${id}`}>
    <div className={cardClassName}>
      <img className={`${cardClassName}__preview`} src={poster_path} alt="" />
      <div className={`${cardClassName}__content`}>
        <div className={`${cardClassName}__text`}>
          <p className={`${cardClassName}__title`}>{title}</p>
          <small className={`${cardClassName}__year_release`}>
            {new Date(release_date).getFullYear().toString()}
          </small>
        </div>
        <span className={`${cardClassName}__genre`}>{genres.join(' & ')}</span>
      </div>
    </div>
  </Link>
);
