import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from '@/components';
import {HeaderStyle} from '@/components/header/header.component';
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
  <HeaderStyle className={headerClassName}>
    <div className={`${headerClassName}__nav`}>
      <h3 className={`${headerClassName}__title`}>Netflixroulette</h3>
      <Link to="/">
        <Button className="btn__link">Search</Button>
      </Link>
    </div>
    <InfoMovieStyle className={`${headerClassName}__body ${headerClassName}__info_movie`}>
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
    </InfoMovieStyle>
  </HeaderStyle>
);

const InfoMovieStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  color: #fff;

  .${headerClassName}__poster {
    min-width: 300px;
    width: 500px;
    max-width: 500px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .${headerClassName}__text_movie {
    position: relative;
    margin-left: 3em;
    width: 1000px;

    .${headerClassName}__text_movie_head {
      display: flex;
      align-items: center;
      margin-top: 1em;

      .${headerClassName}__title_movie {
        color: ${props => props.theme.colors.main_color};
        font-size: 2em;
        margin: 0;
      }

      .${headerClassName}__rating_movie {
        display: block;
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        margin-left: 2em;
      }
    }

    small {
      display: block;
      color: #fff;
      margin-top: 0.5em;
    }

    .${headerClassName}__duration_release_movie {
      display: flex;
      align-items: center;
      margin-top: 1em;
      font-weight: bold;

      span + span {
        margin-left: 1em;
      }
    }

    .${headerClassName}__description_movie {
      margin-top: 2em;
      font-size: 19px;
      line-height: 140%;
    }
  }
`;
