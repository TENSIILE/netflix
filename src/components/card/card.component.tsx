import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface CardProp {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: string[];
}

const cardClassName = 'card';

export const Card: React.FC<CardProp> = ({id, title, posterPath, releaseDate, genres}) => (
  <CardStyle>
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
    </Link>{' '}
  </CardStyle>
);

const CardStyle = styled.div`
  a {
    text-decoration: none;
    color: unset;
  }

  .card {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;

    &:hover {
      .${cardClassName}__content {
        background: #efefef;
      }
    }

    &__preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    &__content {
      padding: 1em;
      background: #f8f8f8;
      text-transform: uppercase;
      transition: 0.4s;

      .${cardClassName}__text {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .${cardClassName}__year_release {
          border: 1px solid #ccc;
          padding: 0.3em 1em;
        }
      }
      .${cardClassName}__genre {
        text-transform: capitalize;
        color: #ccc;
      }
    }
  }
`;
