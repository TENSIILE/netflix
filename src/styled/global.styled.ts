import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  #root,
  .container,
  body {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
