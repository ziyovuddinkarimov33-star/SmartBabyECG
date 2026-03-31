import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Screens
import Dashboard from './screens/Dashboard';
import History from './screens/History';
import Settings from './screens/Settings';
import Device from './screens/Device';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Device" component={Device} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}