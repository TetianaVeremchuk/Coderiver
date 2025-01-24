import React from 'react';
import './Rating.css';

interface RatingProps {
  value: number;
}

export const Rating: React.FC<RatingProps> = ({ value }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          className={`rating__star ${
            index < value ? '' : 'rating__star--empty'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
        </svg>
      ))}
    </div>
  );
};
