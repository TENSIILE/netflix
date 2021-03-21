import React from 'react';
import classnames from 'classnames';
import './Tabs.scss';

export const _classname = 'tabs_container';

export const Tabs = ({tabs = [], onSelect}) => {
  return (
    <div className={`${_classname}__tab`}>
      <ul className={`${_classname}__list`}>
        {tabs.length &&
          tabs.map(tab => (
            <li
              className={classnames(`${_classname}__item`, {
                [`${_classname}__item--active`]: tab.isSelect,
              })}
              key={tab.id}
              name={tab.title}
              onClick={onSelect}
            >
              {tab.title}
            </li>
          ))}
      </ul>
    </div>
  );
};
