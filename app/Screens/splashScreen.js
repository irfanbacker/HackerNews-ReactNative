import React from 'react';
import {Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import Spinner from 'react-native-spinkit';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const SplashScreen = ({navigation, route}) => {
  wait(2000).then(() => navigation.replace('feed'));
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Text style={styles.splashTitle}>Hacker News</Text>
      <Spinner color={'red'} isVisible={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  splashTitle: {
    paddingVertical: 30.0,
    fontSize: 20.0,
    fontWeight: 'bold',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default SplashScreen;
