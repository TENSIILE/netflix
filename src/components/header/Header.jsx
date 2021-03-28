import React from 'react';
import {Input, Tabs, TabsContainer, Button} from '../../components';
import {headerClassName} from './HeaderClassName';
import './Header.scss';

export const Header = ({
  input,
  tabs,
  onToggleTabs,
  onChangeInput,
  onSearchMovies,
  onKeyPressEnterHandler,
}) => (
  <div className={headerClassName}>
    <div className={`${headerClassName}__nav`}>
      <h3 className={`${headerClassName}__title`}>Netflixroulette</h3>
    </div>
    <div className={`${headerClassName}__body`}>
      <div className={`${headerClassName}__input`}>
        <h3>Find your movie</h3>
        <Input
          className="input_field"
          placeholder="Enter movie title or genre"
          value={input}
          onChange={onChangeInput}
          onKeyPress={onKeyPressEnterHandler}
        />
      </div>
    </div>
    <div className={`${headerClassName}__footer`}>
      <TabsContainer>
        <Tabs tabs={tabs} onSelect={onToggleTabs} />
      </TabsContainer>
      <Button onClick={onSearchMovies}>Search</Button>
    </div>
  </div>
);
