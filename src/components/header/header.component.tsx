import React from 'react';
import {Input, Tabs, TabsContainer, Button} from '@/components';
import {Tab} from '@/types';
import {headerClassName} from './header-classname';
import './header.scss';

interface HeaderProp {
  input: string;
  tabs: Tab[];
  onToggleTabs: (e: React.MouseEvent<HTMLLIElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchMovies: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyPressEnterHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProp> = ({
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
