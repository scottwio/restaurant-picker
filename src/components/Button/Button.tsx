import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Text from '../Text';
import styles from './styles';
import Theme from '../../styles';

type ButtonProps = {
  title: string;
  style?: ViewStyle;
  onPress: any;
  testID: string;
};

const Button = ({title, style, testID, onPress}: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.container,
        style,
      ]}
      testID={testID}
      android_ripple={{color: Theme.Colors.black, borderless: false}}
      onPress={onPress}>
      <Text.Body style={styles.text}>{title}</Text.Body>
    </Pressable>
  );
};

export default Button;
