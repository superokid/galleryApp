import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { IMG_DEFAULT_URL } from '../config/constants';

interface Props {
  id?: string;
  baseUrl?: string;
}

const ArtWorkImage = ({ id, baseUrl }: Props) => {
  return (
    <FastImage
      style={styles.image}
      source={{
        uri: `${baseUrl || IMG_DEFAULT_URL}/${id}/full/843,/0/default.jpg`,
      }}
    />
  );
};

export default ArtWorkImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    marginBottom: 14,
    resizeMode: 'contain',
  },
});
