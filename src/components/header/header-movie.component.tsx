import React from 'react';
import Link from 'next/link';
import {Button} from '@/components';
import {Container, Title, Nav, ImageContainer} from '@/components/header/styled/header.styled';
import {
  InfoMovie,
  TextMovieHead,
  TextMovie,
  Poster,
  DurationReleaseMovie,
  DescriptionMovie,
  RatingMovie,
  TitleMovie,
  ReleaseMovie,
} from '@/components/header/styled/header-movie.styled';
import {Flex} from '@/styled/common.styled';

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
  <Container>
    <ImageContainer src="/img/netflix-header.jpg" alt="" />
    <Nav isMovie>
      <Flex justifyContent="space-between" alignItems="center">
        <Title>Netflixroulette</Title>
        <Link href="/">
          <a>
            <Button isLink>Search</Button>
          </a>
        </Link>
      </Flex>
    </Nav>
    <InfoMovie>
      <Flex>
        <Poster>{posterPath && <img src={posterPath} alt="" />}</Poster>
        <TextMovie>
          <TextMovieHead>
            <Flex alignItems="center">
              <TitleMovie>{title}</TitleMovie>
              {!!voteAverage && <RatingMovie>{voteAverage}</RatingMovie>}
            </Flex>
          </TextMovieHead>
          <small>{tagline}</small>
          <DurationReleaseMovie>
            <ReleaseMovie>
              {releaseDate && new Date(releaseDate).getFullYear().toString()}
            </ReleaseMovie>
            {runtime && <span>{runtime} min</span>}
          </DurationReleaseMovie>
          <DescriptionMovie>
            <p>{overview}</p>
          </DescriptionMovie>
        </TextMovie>
      </Flex>
    </InfoMovie>
  </Container>
);
