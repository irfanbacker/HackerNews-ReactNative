import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FeedScreen from './Screens/feedScreen';
import SplashScreen from './Screens/splashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{
            title: 'HackerNews Feed',
            headerTitleStyle: {alignSelf: 'center'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
