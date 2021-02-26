import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const newsItem = ({item}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => null} style={itemStyle.container}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const itemStyle = StyleSheet.create({
  item: {
    backgroundColor: 'aqua',
  },
  container: {
    backgroundColor: 'red',
    paddingVertical: 10.0,
    paddingHorizontal: 10.0,
  },
});

export default newsItem;
