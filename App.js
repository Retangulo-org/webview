import { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, BackHandler } from 'react-native';

export default function App() {
  const webViewRef = useRef();
  const [canGoBack, setCanGoBack] = useState(false);

  const handleBackButtonPress = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress);
    };
  }, [canGoBack]);

  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://mobile.retangulo.org' }}
      ref={webViewRef}
      cacheEnabled={true}
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
      cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
      automaticallyAdjustContentInsets={true}
      javaScriptEnabled={true}
      androidLayerType="hardware"
      scrollEnabled
      setBuiltInZoomControls={false}
      domStorageEnabled={true} 
      onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
