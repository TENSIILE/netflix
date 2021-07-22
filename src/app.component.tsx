import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {rootReducer} from '@/redux/reducers';
import {Routes} from '@/components';
import {createEnhancers} from '@/utils/redux.utils';
import {GlobalStyle} from '@/styled/global.styled';
import theme from '@/styled/theme.styled';

const store = createStore(rootReducer, createEnhancers());

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="container">
            <Routes />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
