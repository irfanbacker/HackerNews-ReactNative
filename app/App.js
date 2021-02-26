import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FeedScreen from './Screens/feedScreen';
import SplashScreen from './Screens/splashScreen';
import WebviewScreen from './Screens/webviewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
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
          <Stack.Screen
            name="webview"
            component={WebviewScreen}
            //options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
