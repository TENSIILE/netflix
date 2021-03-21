import React from 'react';
import {Input, Tabs, TabsContainer, Button} from '../../components';
import './Header.scss';

export const _classname = 'header';

export const Header = ({
  input,
  tabs,
  onToggleTabs,
  onChangeInput,
  onSearchMovies,
  onKeyPressEnterHandler,
}) => (
  <div className={_classname}>
    <div className={`${_classname}__nav`}>
      <h3 className="header__title">Netflixroulette</h3>
    </div>
    <div className={`${_classname}__body`}>
      <div className="input">
        <h3>Find your movie</h3>
        <Input
          placeholder="Enter movie title or genre"
          value={input}
          onChange={onChangeInput}
          onKeyPress={onKeyPressEnterHandler}
        />
      </div>
    </div>
    <div className={`${_classname}__footer`}>
      <TabsContainer>
        <Tabs tabs={tabs} onSelect={onToggleTabs} />
      </TabsContainer>
      <Button onClick={onSearchMovies}>Search</Button>
    </div>
  </div>
);
