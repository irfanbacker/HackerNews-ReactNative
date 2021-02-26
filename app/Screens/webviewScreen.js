import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const WebviewScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <WebView source={{uri: route.params.url}} />
    </SafeAreaView>
  );
};

export default WebviewScreen;
