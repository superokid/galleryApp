import React from 'react';
import { Image } from 'react-native';
import ImgHome from '../assets/icons/home.png';
import ImgLove from '../assets/icons/love.png';

interface Props {
  name: string;
  isActive?: boolean;
}

const TabIcon = ({ name, isActive }: Props) => {
  if (!name) {
    return null;
  }

  const getImage = () => {
    switch (name) {
      case 'Home':
        return ImgHome;
      case 'Bookmark':
        return ImgLove;
      default:
        return null;
    }
  };
  return (
    <Image
      style={{ width: 30, height: 30, opacity: isActive ? 1 : 0.8 }}
      source={getImage()}
      resizeMode="contain"
    />
  );
};

export default TabIcon;
