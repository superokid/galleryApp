import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ArtWork } from '../../config/api';
import { Text, ArtWorkImage } from '../../components';
import BookmarkStore from '../../store/BookmarkStore';
import ImgLoveActive from '../../assets/icons/love-red.png';
import ImgTrash from '../../assets/icons/trash-red.png';

interface Props {
  item: ArtWork;
}

const Item = ({ item }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <BookmarkStore id={item.id}>
      {({ onBookmark }) => (
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => navigation.push('ArtDetail', { id: item.id })}>
            <ArtWorkImage id={item.image_id} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Text type="title1" addStyles={styles.title}>
              {item.title || 'Title'}
            </Text>
            <Image source={ImgLoveActive} style={styles.icon} />
            <TouchableOpacity onPress={() => onBookmark(item)}>
              <Image source={ImgTrash} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text type="desc1">{item.inscriptions}</Text>
        </View>
      )}
    </BookmarkStore>
  );
};

export default Item;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
