import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {rootReducer} from '@/redux/reducers';
import {createEnhancers} from '@/utils/redux.utils';
import {GlobalStyle} from '@/styled/global.styled';
import theme from '@/styled/theme.styled';
import {ErrorBoundary} from '@/components';

const store = createStore(rootReducer, createEnhancers());

export const GlobalLayout: React.FC = ({children}): JSX.Element => (
  <ErrorBoundary>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="container">{children}</div>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);
