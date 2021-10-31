import React from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from 'react-query';

import {
  Text,
  BackHeader,
  Container,
  Spacing,
  ArtWorkImage,
} from '../../components';
import { ArtDetailProps } from '../../routes/type';
import { getArtDetail, ArtDetailApi } from '../../config/api';
import TextSection from './TextSection';
import ImgLove from '../../assets/icons/love-gray.png';
import ImgLoveActive from '../../assets/icons/love-red.png';
import BookmarkStore from '../../store/BookmarkStore';

const ArtDetail = ({ route }: ArtDetailProps) => {
  const { id } = route.params;
  const { data, isLoading, isError } = useQuery<ArtDetailApi>(
    ['getArtDetail', id],
    () => getArtDetail(id),
  );

  const apiData = data?.data?.data;

  return (
    <Container>
      <View style={styles.container}>
        <BackHeader title={apiData?.title || ''} />
        <ScrollView style={styles.content}>
          {isLoading && <ActivityIndicator />}
          {isError && <Text>error</Text>}
          <ArtWorkImage
            id={apiData?.image_id}
            baseUrl={data?.data?.config?.iiif_url}
          />
          {!isLoading && (
            <BookmarkStore id={id}>
              {({ isBookmarked, onBookmark }) => (
                <TouchableOpacity onPress={() => onBookmark(apiData)}>
                  <Image
                    source={isBookmarked ? ImgLoveActive : ImgLove}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
            </BookmarkStore>
          )}
          <Spacing size={15} />
          <TextSection title="Credit" desc={apiData?.credit_line} />
          <TextSection title="Inscription" desc={apiData?.inscriptions} />
          <TextSection
            title="Provenance Text"
            desc={apiData?.provenance_text}
          />
          <TextSection
            title="Publication History"
            desc={apiData?.publication_history}
            isHtmlContent
          />
          <TextSection
            title="Exhibition History"
            desc={apiData?.exhibition_history}
          />
        </ScrollView>
      </View>
    </Container>
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
    marginBottom: 14,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
