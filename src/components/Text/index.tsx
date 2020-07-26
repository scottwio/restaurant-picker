import React from 'react';
import {Text as RNText, ViewStyle, StyleSheet, TextStyle} from 'react-native';

const textVariants: ViewStyle & {[key: string]: any} = StyleSheet.create({
  body: {
    fontSize: 14,
    lineHeight: 21,
  },
  heading: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
  },
  button: {
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 21,
  },
});

const getTextStyle = ({variant}: {variant: string}) => {
  return variant && variant in textVariants
    ? textVariants[variant]
    : textVariants.body;
};

type TextProps = {
  style?: TextStyle;
  children: string;
};

type TextCustomProps = {
  variant: string;
};

const Text = (props: TextProps & TextCustomProps) => {
  const {style, ...rest} = props;
  const textStyle = getTextStyle(rest);

  return <RNText style={[textStyle, style]} {...rest} />;
};

Text.Body = (props: TextProps) => <Text {...props} variant="body" />;
Text.Heading = (props: TextProps) => <Text {...props} variant="heading" />;
Text.Button = (props: TextProps) => <Text {...props} variant="button" />;

export default Text;
