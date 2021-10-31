import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.bg}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
