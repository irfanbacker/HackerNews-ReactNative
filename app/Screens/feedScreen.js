import React from 'react';
import {FlatList, ScrollView, RefreshControl} from 'react-native';

import newsItem from '../components/newsItem';

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

const FeedScreen = ({navigation, route}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [storiesData, setStories] = React.useState(route.params.data);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getTopStoriesAsync().then((stories) => {
      setStories(stories);
      setRefreshing(false);
    });
  }, []);
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={storiesData}
      renderItem={newsItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FeedScreen;
