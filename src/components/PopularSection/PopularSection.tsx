import React from 'react';
import './PopularSection.css';
import movie1 from '../../assets/movie1.png';
import movie2 from '../../assets/movie2.png';
import movie3 from '../../assets/movie3.png';
import movie4 from '../../assets/movie4.png';
import movie5 from '../../assets/movie5.png';
import movie6 from '../../assets/movie6.png';

export const PopularSection: React.FC = () => {
  return (
    <section className="popular-section">
      <div className="popular-section__header">
        <h2>Popular This Week</h2>
        <div className="popular-section__controls">
          <button className="popular-section__button">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19" cy="19" r="18" stroke="#A7A6A6" strokeWidth="2" />
              <path
                d="M21.5 27L23 25.5L16.5 19L23 12.5L21.5 11L13.5 19L21.5 27Z"
                fill="#A7A6A6"
              />
            </svg>
          </button>
          <button className="popular-section__button">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19" cy="19" r="18" stroke="white" strokeWidth="2" />
              <path
                d="M16.5 27L15 25.5L21.5 19L15 12.5L16.5 11L24.5 19L16.5 27Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="popular-section__age-wrapper">
          <div className="popular-section__age-badge">
            <div className="popular-section__age-badge-red"></div>
            <span>16+</span>
          </div>
        </div>
      </div>
      <div className="popular-section__content-wrapper">
        <div className="popular-section__content">
          <img src={movie6} alt="Movie 6" className="popular-section__movie popular-section__movie--half" />
          <img src={movie1} alt="Movie 1" className="popular-section__movie" />
          <img src={movie2} alt="Movie 2" className="popular-section__movie" />
          <img src={movie3} alt="Movie 3" className="popular-section__movie" />
          <img src={movie4} alt="Movie 4" className="popular-section__movie" />
          <img src={movie5} alt="Movie 5" className="popular-section__movie" />
        </div>
      </div>
    </section>
  );
};
