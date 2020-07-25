import React from 'react';
import {WebView as RNCWebview} from 'react-native-webview';
import styles from './styles';

type WebViewProps = {
  uri: string;
};

const WebView = ({uri}: WebViewProps) => {
  return <RNCWebview style={styles.container} source={{uri}} />;
};

export default WebView;
