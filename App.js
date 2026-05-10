import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { html } from './src/appHtml';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FDF7EC" />
      <WebView
        originWhitelist={['*']}
        source={{ html, baseUrl: 'https://bclub.local/' }}
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7EC'
  },
  webview: {
    flex: 1,
    backgroundColor: '#FDF7EC'
  }
});
