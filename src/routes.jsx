import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {IndexPage, NotFoundPage, MoviePage} from './pages';
import {ErrorBoundary} from './components';

export const useRoutes = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/film">
        <MoviePage />
      </Route>
      <Route path="/404">
        <NotFoundPage />
      </Route>
      <Redirect to="/404" />
    </Switch>
  </ErrorBoundary>
);
