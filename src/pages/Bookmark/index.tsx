import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Container } from '../../components';
import BookmarkStore from '../../store/BookmarkStore';
import BookmarkItem from './Item';
import { ArtWork } from '../../config/api';

interface Props {}

const Bookmark = () => {
  const renderItem = ({ item }: { item: ArtWork }) => {
    return <BookmarkItem item={item} />;
  };

  return (
    <Container>
      <BookmarkStore>
        {({ data }) => {
          if (!data.length) {
            return <Text>Bookmark is empty</Text>;
          }
          return (
            <FlatList
              data={data}
              style={styles.list}
              renderItem={renderItem}
              keyExtractor={item => (item.id || '').toString()}
            />
          );
        }}
      </BookmarkStore>
    </Container>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    height: '100%',
  },
});
