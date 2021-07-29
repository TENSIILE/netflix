import React from 'react';
import Link from 'next/link';
import {
  Container,
  Image,
  Card as CardStyle,
  Content,
  YearRelease,
  Genre,
} from '@/components/card/styled/card.styled';
import {Flex} from '@/styled/common.styled';

interface CardProp {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: string[];
}

export const Card: React.FC<CardProp> = ({id, title, posterPath, releaseDate, genres}) => (
  <Container>
    <Link href={`/movie/${id}`}>
      <a>
        <CardStyle>
          <Image src={posterPath} alt="" />
          <Content>
            <Flex alignItems="center" justifyContent="space-between">
              <p>{title}</p>
              <YearRelease>{new Date(releaseDate).getFullYear().toString()}</YearRelease>
            </Flex>
            <Genre>{genres.join(' & ')}</Genre>
          </Content>
        </CardStyle>
      </a>
    </Link>
  </Container>
);
