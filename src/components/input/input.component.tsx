import React from 'react';
import './input.style.scss';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => (
  <input type="text" {...props} />
);
