import React from 'react';
import styles from './styles';
import {View, ViewStyle} from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
};

const Container = ({children, style, testID}: ContainerProps) => {
  return (
    <View style={[styles.container, style]} testID={testID}>
      {children}
    </View>
  );
};

export default Container;
