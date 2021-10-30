import React, { useState } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { useQuery } from 'react-query';

import { getArtWorks, ArtWorksApi, ArtWork } from '../../config/api';
import useDebounce from '../../utils/useDebounce';
import { IMG_DEFAULT_URL } from '../../config/constants';
import { HomeProps } from '../../routes/type';

const Home = ({ navigation }: HomeProps) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce<string>(search, 500);
  const { data, isLoading, isError } = useQuery<ArtWorksApi>(
    ['getArtWorks', debouncedSearch],
    () => getArtWorks({ search }),
  );
  if (isLoading) {
    return null;
  }
  if (isError) {
    return <Text>error</Text>;
  }

  const renderItem = ({ item }: { item: ArtWork }) => {
    return (
      <TouchableOpacity
        style={styles.imageBtn}
        onPress={() => navigation.push('ArtDetail', { id: item.id })}>
        <Image
          style={styles.image}
          source={{
            uri: `${data?.data?.config?.iiif_url || IMG_DEFAULT_URL}/${
              item.image_id
            }/full/400,/0/default.jpg`,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.list}
      data={data?.data?.data || []}
      renderItem={renderItem}
      keyExtractor={item => (item.id || '').toString()}
      numColumns={3}
      ListHeaderComponent={
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Type your search here..."
          placeholderTextColor="#888"
        />
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    height: '100%',
    backgroundColor: '#fff',
  },
  imageBtn: {
    width: '33.33%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
