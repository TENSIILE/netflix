import styled from 'styled-components';

interface ListItemProps {
  isActive?: boolean;
}

export const Container = styled.div`
  margin-left: 1em;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

export const ListItem = styled.li<ListItemProps>`
  padding: 0.5em 1em;
  text-transform: uppercase;
  color: #fff;
  background: #333;
  cursor: pointer;
  font-family: ${props => props.theme.font_family};
  transition: 0.4s;

  ${props =>
    props.isActive &&
    `
    background: ${props.theme.colors.color_main};
    color: #f5f5f5;

    &:hover {
      background: ${props.theme.colors.color_main};
    }
  `}

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
