import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';

const Stack = createNativeStackNavigator();

const RouterWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(route => {
          return <Stack.Screen {...route} key={route.name} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterWrapper;
