import React from 'react';
import { StyleSheet, View } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

import { Text } from '../../components';

interface Props {
  title: string;
  desc?: string;
  isHtmlContent?: boolean;
}

const TextSection = ({ title, desc, isHtmlContent }: Props) => {
  return (
    <View style={styles.section}>
      <Text type="title1">{title}</Text>
      <Text type="desc1">{desc || '-'}</Text>
    </View>
  );
};

export default TextSection;

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
});
