import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from '@/redux/reducers';
import {Routes} from '@/components';
import {createEnhancers} from '@/utils/redux.utils';
import './index.style.scss';

const store = createStore(rootReducer, createEnhancers());

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
