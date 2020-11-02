import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  );
}

export default Routes;
