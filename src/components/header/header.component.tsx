import React from 'react';
import {Input, Tabs, TabsContainer, Button} from '@/components';
import {Tab} from '@/types';
import {headerClassName} from './header-classname';
import './header.style.scss';

interface HeaderProp {
  input: string;
  tabs: Tab[];
  onToggleTabs: (e: React.MouseEvent<HTMLLIElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchMovies: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Header: React.FC<HeaderProp> = ({
  input,
  tabs,
  onToggleTabs,
  onChangeInput,
  onSearchMovies,
}) => (
  <div className={headerClassName}>
    <div className={`${headerClassName}__nav`}>
      <h3 className={`${headerClassName}__title`}>Netflixroulette</h3>
    </div>
    <form onSubmit={onSearchMovies}>
      <div className={`${headerClassName}__body`}>
        <div className={`${headerClassName}__input`}>
          <h3>Find your movie</h3>
          <Input
            className="input_field"
            placeholder="Enter movie title or genre"
            value={input}
            onChange={onChangeInput}
          />
        </div>
      </div>
      <div className={`${headerClassName}__footer`}>
        <TabsContainer>
          <Tabs tabs={tabs} onSelect={onToggleTabs} />
        </TabsContainer>
        <Button type="submit">Search</Button>
      </div>
    </form>
  </div>
);
