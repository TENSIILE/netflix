import React from 'react';
import classnames from 'classnames';
import './Tabs.scss';

export const Tabs = ({tabs = [], onSelect}) => (
  <div className="tabs_container__tab">
    <ul className="tabs_container__list">
      {tabs.length &&
        tabs.map(tab => (
          <li
            className={classnames('tabs_container__item', {
              'tabs_container__item--active': tab.isSelect,
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

Tabs.Container = ({title = 'Search by', children}) => (
  <div className="tabs_container">
    <p className="tabs_container__title">{title}</p>
    {children}
  </div>
);
