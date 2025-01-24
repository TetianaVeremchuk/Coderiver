import React from 'react';
import './Header.css';
import logo from '@/assets/netflix-logo.svg';
import profileIcon from '@/assets/profile-icon.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Netflix Logo" className="header__logo" />
        <svg
          width="4"
          height="28"
          viewBox="0 0 4 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header__separator"
        >
          <path d="M2 0V28" stroke="white" strokeWidth="3" />
        </svg>
        <span className="header__date">Friday, July 8th</span>
      </div>
      <div className="header__icons">
        <button className="header__icon-button">
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header__icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.249 26.6941L38.8881 36.3332C39.2269 36.6723 39.4172 37.132 39.417 37.6113C39.4169 38.0906 39.2263 38.5502 38.8872 38.889C38.5482 39.2278 38.0885 39.4181 37.6092 39.4179C37.1298 39.4177 36.6702 39.2272 36.3314 38.8881L26.6923 29.249C23.8107 31.4808 20.1872 32.5311 16.5588 32.1861C12.9304 31.8412 9.56972 30.1269 7.16038 27.3921C4.75104 24.6573 3.47404 21.1073 3.58918 17.4644C3.70431 13.8214 5.20293 10.3592 7.78016 7.78194C10.3574 5.20471 13.8196 3.7061 17.4626 3.59096C21.1055 3.47583 24.6555 4.75282 27.3903 7.16217C30.1252 9.57151 31.8394 12.9322 32.1844 16.5606C32.5293 20.189 31.479 23.8125 29.2472 26.6941H29.249ZM17.9167 28.6667C20.7678 28.6667 23.5021 27.5341 25.5181 25.5181C27.5341 23.5021 28.6667 20.7678 28.6667 17.9167C28.6667 15.0656 27.5341 12.3313 25.5181 10.3153C23.5021 8.29926 20.7678 7.16668 17.9167 7.16668C15.0656 7.16668 12.3313 8.29926 10.3153 10.3153C8.29927 12.3313 7.16668 15.0656 7.16668 17.9167C7.16668 20.7678 8.29927 23.5021 10.3153 25.5181C12.3313 27.5341 15.0656 28.6667 17.9167 28.6667Z"
              fill="white"
            />
          </svg>
        </button>
        <img src={profileIcon} alt="Profile Icon" className="header__profile-icon" />
      </div>
    </header>
  );
};
