import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from '../screens/splashScreen/index'
import AuthStackScreens from './AuthStack/index';
import AppStackScreens from './AppStack/index';
import DrawerScreens from './AuthStack/Drawer/index'

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStackScreens} />
        <Stack.Screen name="Home" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;