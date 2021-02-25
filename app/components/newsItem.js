import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const newsItem = ({item}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => null} style={itemStyle.item}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const itemStyle = StyleSheet.create({
  item: {
    backgroundColor: 'aqua',
  },
});

export default newsItem;
