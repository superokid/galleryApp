import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type Props = {
  /** text type group by design similarity */
  type?: 'title1' | 'desc1';
  /** margin bottom */
  mb?: number;
} & TextProps;

const CText: React.FC<Props> = ({ type, mb, children, ...props }) => {
  return (
    <Text
      style={[
        type && styles[type],
        {
          marginBottom: mb,
        },
        styles.base,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  title1: {
    fontSize: 20,
  },
  desc1: {
    fontSize: 16,
  },
  base: {
    color: '#444',
  },
});
