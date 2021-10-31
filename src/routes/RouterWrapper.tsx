import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import ArtDetail from '../pages/ArtDetail';
import Bookmark from '../pages/Bookmark';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen
      name="Bookmark"
      component={Bookmark}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const RouterWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={TabComponent}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ArtDetail"
          component={ArtDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterWrapper;
