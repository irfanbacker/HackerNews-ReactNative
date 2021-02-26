import React from 'react';
import {Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import Spinner from 'react-native-spinkit';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const getTopStoriesIDAsync = async () => {
  try {
    let response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getStoryByIDAsync = async (id) => {
  try {
    let response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty',
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getTopStoriesAsync = async () => {
  let storyIds = await getTopStoriesIDAsync();
  let stories = [];
  let storyPromise = storyIds.slice(0, 30).map(async (id) => {
    let item = await getStoryByIDAsync(id);
    if (item.type === 'story') {
      stories.push(item);
    }
  });
  await Promise.all(storyPromise);
  return stories;
};

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
