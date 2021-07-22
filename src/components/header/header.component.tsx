import React from 'react';
import {Input, Tabs, TabsContainer, Button} from '@/components';
import {Tab} from '@/types';
import {
  Container,
  Title,
  Nav,
  Body,
  InputField,
  Footer,
} from '@/components/header/styled/header.styled';
import {Flex} from '@/styled/common.styled';

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
  <Container>
    <Nav>
      <Flex justifyContent="space-between" alignItems="center">
        <Title>Netflixroulette</Title>
      </Flex>
    </Nav>
    <form onSubmit={onSearchMovies}>
      <Body>
        <InputField>
          <h3>Find your movie</h3>
          <Input placeholder="Enter movie title or genre" value={input} onChange={onChangeInput} />
        </InputField>
      </Body>
      <Footer>
        <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
          <TabsContainer>
            <Tabs tabs={tabs} onSelect={onToggleTabs} />
          </TabsContainer>
          <Button type="submit">Search</Button>
        </Flex>
      </Footer>
    </form>
  </Container>
);
