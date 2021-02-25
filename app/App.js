/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import './components/newsItem';
import newsItem from './components/newsItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b453d96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b345d96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd34596-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd34596-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557123e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557231e29d72',
    title: 'Third Item',
  },
  {
    id: '5869423a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '585694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14235571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da231-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <SafeAreaView style={styles.mainView}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList data={DATA} renderItem={newsItem} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;