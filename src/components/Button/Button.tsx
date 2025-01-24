import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string; 
  primary?: boolean; 
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, primary, icon }) => {
  return (
    <button className={primary ? 'button button--primary' : 'button'}>
      {icon && <img className="button__icon" src={icon} alt="Button Icon" />}
      <span className="button__text">{text}</span>
    </button>
  );
};
