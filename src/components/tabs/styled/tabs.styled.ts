import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 1em;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

export const ListItem = styled.li`
  padding: 0.5em 1em;
  text-transform: uppercase;
  color: #fff;
  background: #333;
  cursor: pointer;
  font-family: ${props => props.theme.font_family};
  transition: 0.4s;

  &.active {
    background: ${props => props.theme.colors.color_main};
    color: #f5f5f5;

    &:hover {
      background: ${props => props.theme.colors.color_main};
    }
  }

  &:hover {
    background: ${props => props.theme.colors.color_lighten};
  }

  &:active {
    background: ${props => props.theme.colors.color_darken};
  }

  & + & {
    margin-left: 1em;
  }
`;
