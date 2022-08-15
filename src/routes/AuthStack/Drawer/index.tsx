import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TabsStackScreens } from '../Tab/index';
import NotificationScreen from '../../../screens/NotificationScreen/index';

const Drawer = createDrawerNavigator();

export default function DrawerScreens() {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
        headerShown: false,
      }}
    >
        <Drawer.Screen name="Home" component={ TabsStackScreens } />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}