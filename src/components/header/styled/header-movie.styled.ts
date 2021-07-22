import styled from 'styled-components';

export const InfoMovie = styled.div`
  font-size: 1.5em;
  color: #fff;
`;

export const Poster = styled.div`
  min-width: 300px;
  width: 500px;
  max-width: 500px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextMovie = styled.div`
  position: relative;
  margin-left: 3em;
  width: 1000px;
`;

export const TextMovieHead = styled.div`
  margin-top: 1em;

  small {
    display: block;
    color: #fff;
    margin-top: 0.5em;
  }
`;

export const TitleMovie = styled.div`
  color: ${props => props.theme.colors.color_main};
  font-size: 2em;
  margin: 0;
`;

export const RatingMovie = styled.div`
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
`;

export const ReleaseMovie = styled.div`
  margin-right: 1em;
`;

export const DurationReleaseMovie = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  font-weight: bold;

  span + span {
    margin-left: 1em;
  }
`;

export const DescriptionMovie = styled.div`
  margin-top: 2em;
  font-size: 19px;
  line-height: 140%;
`;
