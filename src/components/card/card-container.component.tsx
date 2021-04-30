import React from 'react';

const cardsContainerClassName = 'cards_container';

export const CardContainer: React.FC = ({children}) => {
  const contentClassName = children
    ? `${cardsContainerClassName}__grid`
    : `${cardsContainerClassName}__not_found`;

  return (
    <div className={cardsContainerClassName}>
      <div className={contentClassName}>{children ? children : 'No films found'}</div>
    </div>
  );
};
