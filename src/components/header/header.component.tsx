import React from 'react';
import styled from 'styled-components';
import {Input, Tabs, TabsContainer, Button} from '@/components';
import {Tab} from '@/types';
import header_img from '@/static/img/netflix-header.jpg';
import {headerClassName} from './header-classname';

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
  <HeaderStyle className={headerClassName}>
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
  </HeaderStyle>
);

export const HeaderStyle = styled.div`
  position: relative;
  width: 100%;
  background: url(${header_img});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2em 10rem;

  .${headerClassName}__nav {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .${headerClassName}__title {
      margin: 0;
      color: ${props => props.theme.colors.main_color};
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .${headerClassName}__body {
    position: relative;
    margin-top: 3.5em;

    .${headerClassName}__input {
      h3 {
        text-transform: uppercase;
        color: #fff;
        font-weight: normal;
      }
    }
  }

  .${headerClassName}__footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1.5em;
  }
`;
