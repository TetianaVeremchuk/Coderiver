import React from 'react';
import { Button } from './Button/Button';
import playIcon from '@/assets/play-icon.png';

export const StreamNowSection: React.FC = () => {
  return <Button text="Stream Now" primary icon={playIcon} />;
};
