import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { IMG_DEFAULT_URL } from '../config/constants';

interface Props {
  id?: string;
  baseUrl?: string;
}

const ArtWorkImage = ({ id, baseUrl }: Props) => {
  return (
    <Image
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
    height: 300,
    marginBottom: 14,
    resizeMode: 'contain',
  },
});
