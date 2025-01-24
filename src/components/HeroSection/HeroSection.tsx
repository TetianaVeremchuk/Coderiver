import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  onStreamNowClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStreamNowClick }) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__genres">Drama | Thriller | Supernatural</div>
        <h1 className="hero__title">Stranger Things</h1>
        <div className="hero__info">
          <span className="hero__info--highlight">2019</span> |{' '}
          <span className="hero__info--highlight">DIRECTOR:</span> Shawn Levy |{' '}
          <span className="hero__info--highlight">seasons:</span> 3 (5 Episodes)
        </div>
        <p className="hero__description">
          In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they
          search for answers, the children unravel a series of extraordinary mysteries.
        </p>
        <div className="hero__rating">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`hero__star ${index < 3 ? 'hero__star--filled' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.213 1.193-5.941 5.787 1.402 8.179L12 18.896 4.658 23.177l1.402-8.179L.119 9.211l8.213-1.193z" />
            </svg>
          ))}
        </div>
        <div className="hero__actions">
          <button className="hero__button hero__button--primary" onClick={onStreamNowClick}>
            STREAM NOW
            <svg
              className="hero__button-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 2C8.26875 2 2 8.26875 2 16C2 23.7313 8.26875 30 16 30C23.7313 30 30 23.7313 30 16C30 8.26875 23.7313 2 16 2ZM20.5031 16.2156L13.6781 21.1812C13.6407 21.2081 13.5966 21.2242 13.5507 21.2276C13.5047 21.2311 13.4587 21.2218 13.4177 21.2008C13.3767 21.1798 13.3422 21.1479 13.3182 21.1087C13.2941 21.0694 13.2813 21.0242 13.2812 20.9781V11.0531C13.2811 11.007 13.2937 10.9616 13.3178 10.9222C13.3418 10.8828 13.3762 10.8508 13.4173 10.8298C13.4584 10.8087 13.5046 10.7995 13.5506 10.8031C13.5966 10.8066 13.6408 10.8229 13.6781 10.85L20.5031 15.8125C20.5354 15.8353 20.5617 15.8655 20.5798 15.9006C20.598 15.9357 20.6075 15.9746 20.6075 16.0141C20.6075 16.0536 20.598 16.0925 20.5798 16.1275C20.5617 16.1626 20.5354 16.1928 20.5031 16.2156Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="hero__button hero__button--secondary">ALL EPISODES</button>
        </div>
      </div>
    </section>
  );
};
