import React from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { useQuery } from 'react-query';

import { Text, BackHeader } from '../../components';
import { ArtDetailProps } from '../../routes/type';
import { getArtDetail, ArtDetailApi } from '../../config/api';
import { IMG_DEFAULT_URL } from '../../config/constants';
import TextSection from './TextSection';

const ArtDetail = ({ route }: ArtDetailProps) => {
  const { id } = route.params;
  const { data, isLoading, isError } = useQuery<ArtDetailApi>(
    ['getArtDetail', id],
    () => getArtDetail(id),
  );

  const apiData = data?.data?.data;

  return (
    <View style={styles.container}>
      <BackHeader title={apiData?.title || ''} />
      <ScrollView style={styles.content}>
        {isLoading && <ActivityIndicator />}
        {isError && <Text>error</Text>}
        <Image
          style={styles.image}
          source={{
            uri: `${data?.data?.config?.iiif_url || IMG_DEFAULT_URL}/${
              apiData?.image_id
            }/full/843,/0/default.jpg`,
          }}
          resizeMode="contain"
        />
        <TextSection title="Credit" desc={apiData?.credit_line} />
        <TextSection title="Inscription" desc={apiData?.inscriptions} />
        <TextSection title="Provenance Text" desc={apiData?.provenance_text} />
        <TextSection
          title="Publication History"
          desc={apiData?.publication_history}
        />
        <TextSection
          title="Exhibition History"
          desc={apiData?.exhibition_history}
        />
      </ScrollView>
    </View>
  );
};

export default ArtDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: { paddingHorizontal: 15 },
  image: {
    width: '100%',
    height: 300,
  },
});