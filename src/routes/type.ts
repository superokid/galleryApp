import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ArtDetail: { id: number };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type ArtDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'ArtDetail'
>;
