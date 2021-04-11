import React from 'react';
import './Input.scss';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => (
  <input type="text" {...props} />
);
