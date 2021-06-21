import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '@/components';
import './index.style.scss';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
};
