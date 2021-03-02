import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import './index.scss';

export class App extends Component {
  routes = useRoutes();

  render() {
    return (
      <BrowserRouter>
        <div className="container">{this.routes}</div>
      </BrowserRouter>
    );
  }
}
