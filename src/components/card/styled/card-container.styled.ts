import styled from 'styled-components';

interface CardGridProps {
  isNotFound?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 2;
  width: 100%;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 0 5em;
`;

export const CardGrid = styled.div<CardGridProps>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 3em;
  row-gap: 3em;
  margin: auto;
  width: 75%;

  ${props =>
    props.isNotFound &&
    `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    margin: 0;
    color: #222;
    font-weight: 600;
  `}
`;
