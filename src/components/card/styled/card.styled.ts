import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
    color: unset;
  }

  * {
    font-family: ${props => props.theme.font_family};
  }
`;

export const Content = styled.div`
  padding: 1em;
  background: #f8f8f8;
  text-transform: uppercase;
  transition: 0.4s;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const YearRelease = styled.div`
  border: 1px solid #ccc;
  padding: 0.3em 1em;
`;

export const Genre = styled.div`
  text-transform: capitalize;
  color: #ccc;
`;
