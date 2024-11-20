import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://retangulo.pages.dev' }}
      cacheEnabled={true}
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
      cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
      automaticallyAdjustContentInsets={true}
      javaScriptEnabled={true}
      androidLayerType="hardware"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
