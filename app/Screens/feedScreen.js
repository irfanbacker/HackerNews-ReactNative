import React from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import getTopStoriesAsync from '../API/hackerNews';

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

  const NewsItem = ({item}) => {
    return (
      <View style={itemStyle.container}>
        <TouchableOpacity
          onPress={() => {
            console.log(item.url);
            navigation.push('webview', {url: item.url});
          }}
          style={itemStyle.item}>
          <Text style={itemStyle.title}>{item.title}</Text>
          <Text />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={itemStyle.caption}>{item.descendants} Comments</Text>
            <Text style={itemStyle.caption}>{item.by}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={storiesData}
        renderItem={NewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const itemStyle = StyleSheet.create({
  container: {
    padding: '2%',
    paddingVertical: '1%',
  },
  item: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10.0,
    paddingHorizontal: 10.0,
    borderRadius: 5.0,
  },
  title: {
    fontSize: 20.0,
    fontWeight: 'bold',
    color: 'black',
  },
  caption: {
    fontSize: 12.0,
  },
});

export default FeedScreen;
