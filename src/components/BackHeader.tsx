import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from './Text';
import Spacing from './Spacing';

interface Props {
  title: string;
}

const BackHeader = ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.btnBack}>
        <Text style={styles.back}>{'<'}</Text>
        <Spacing size={10} />
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    width: '85%',
    color: '#444',
  },
});
