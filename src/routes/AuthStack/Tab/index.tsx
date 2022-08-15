import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home/index';
import DiscussionScreens from '../../../screens/DiscussionScreen';
import NotificationScreen from '../../../screens/NotificationScreen';
import SearchScreen from '../../../screens/SearchScreen';
import {NavMenu} from '../../../components/Tabs/NavTab/index';
import AppStackScreens from '../../AppStack/index' 

const Tabs = createBottomTabNavigator();
export const TabsStackScreens = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <NavMenu {...props} />}
      // @ts-ignore
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tabs.Screen name="Home" component={AppStackScreens} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Discussion" component={DiscussionScreens} />
      <Tabs.Screen name="Notifications" component={NotificationScreen} />
    </Tabs.Navigator>
  );
};
