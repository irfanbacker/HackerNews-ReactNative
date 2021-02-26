import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Spinner from 'react-native-spinkit';

import getTopStoriesAsync from '../API/hackerNews';

const SplashScreen = ({navigation, route}) => {
  getTopStoriesAsync().then((stories) => {
    navigation.replace('feed', {data: stories});
  });
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
