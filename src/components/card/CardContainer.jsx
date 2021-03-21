import React from 'react';

const _classname = 'cards_container';

export const CardContainer = ({children}) => {
  if (!children) {
    return (
      <div className={_classname}>
        <p className={`${_classname}__not_found`}>No films found</p>
      </div>
    );
  }

  return (
    <div className={_classname}>
      <div className={`${_classname}__grid`}>{children}</div>
    </div>
  );
};
