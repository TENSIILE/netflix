import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from '@/redux/reducers';
import {createEnhancers} from '@/utils/redux.utils';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '@/styled/global.styled';
import theme from '@/styled/theme.styled';

const store = createStore(rootReducer, createEnhancers());

interface ReactChildren {
  children: React.ReactChild;
}

export const GlobalLayout = ({children}: ReactChildren): JSX.Element => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div className="container">{children}</div>
    </ThemeProvider>
  </Provider>
);
