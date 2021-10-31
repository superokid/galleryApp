import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type Props = {
  /** text type group by design similarity */
  type?: 'title1' | 'desc1';
  /** margin bottom */
  mb?: number;
  addStyles?: any;
} & TextProps;

const CText: React.FC<Props> = ({
  type,
  mb,
  children,
  addStyles,
  ...props
}) => {
  return (
    <Text
      style={[
        type && styles[type],
        {
          marginBottom: mb,
        },
        styles.base,
        addStyles,
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
