import React from 'react';
import styled from 'styled-components';

const cardsContainerClassName = 'cards_container';

export const CardContainer: React.FC = ({children}) => {
  const contentClassName = children
    ? `${cardsContainerClassName}__grid`
    : `${cardsContainerClassName}__not_found`;

  return (
    <CardContainerStyle className={cardsContainerClassName}>
      <div className={contentClassName}>{children ? children : 'No films found'}</div>
    </CardContainerStyle>
  );
};

const CardContainerStyle = styled.div`
  position: relative;
  display: flex;
  flex-grow: 2;
  width: 100%;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 0 5em;

  .${cardsContainerClassName}__not_found {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    margin: 0;
    color: #222;
    font-weight: 600;
  }

  .${cardsContainerClassName}__grid {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 3em;
    row-gap: 3em;
    margin: auto;
    width: 75%;
  }
`;
