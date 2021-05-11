import React from 'react';
import './button.style.scss';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => (
  <button {...props}>{props.children}</button>
);
