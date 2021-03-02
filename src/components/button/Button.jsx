import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  padding: 1em 4em;
  outline: none;
  border: none;
  color: white;
  text-transform: uppercase;
  background: var(--main-color);
  cursor: pointer;
  transition: 0.4s;

  &.btn__link {
    background: white;
    color: var(--main-color);

    &:hover {
      color: white;
    }
  }

  &:hover {
    background: var(--main-color-lighten);
  }

  &:active {
    background: var(--main-color-darken);
  }
`;
