import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from '@/redux/reducers';
import {loggerMiddleware, thunkMiddleware} from '@/redux/middleware';
import {Routes} from '@/components';
import './index.style.scss';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(loggerMiddleware, thunkMiddleware), composeWithDevTools())
);

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
