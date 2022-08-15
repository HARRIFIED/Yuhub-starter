import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {colors} from '../../../themes/colours';
import {SizedBox} from '../../../components/sized-box';
import {HDP} from '../../../helpers/index';
import style from './styles';

export const NavMenu = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const MenuIcons = useCallback(({label, status}: any) => {
    switch (label.toLowerCase()) {
      case 'home':
        return (
          <View>
            <Image 
                source={
                  status ? 
                  require("../../../assets/icons/home-fill.png") 
                  :
                  require("../../../assets/icons/home.png") 
                }
                style={{
                  width: HDP(24),
                  height: HDP(21.27),
                  resizeMode: 'contain',
                  tintColor: 'black'
                }}
            />
            <Text style={style.tabText}>Home</Text>
          </View>
        );
      case 'search':
        return (
          <View>
            <Image 
              source={
                status ? 
                require("../../../assets/icons/search.png") 
                : require("../../../assets/icons/search.png") 
              }
            />
            <Text style={style.tabText}>Search</Text>
          </View>
        );
      case 'discussion':
        return (
          <View>
            <Image 
              source={
                status ? 
                require("../../../assets/icons/discussion.png") 
                : require("../../../assets/icons/discussion.png") }
            />
            <Text style={style.tabText}>Discussion</Text>
          </View>
        );
      case 'notification':
        return (
          <View>
            <Image 
              source={
                status ? 
                require("../../../assets/icons/bell.png") 
                : require("../../../assets/icons/bell-fill.png") }
            />
            <Text style={style.tabText}>Notifications</Text>
          </View>
        );

      default:
        return (
          <Image 
              source={
                status ? 
                require("../../../assets/icons/bell-fill.png") : 
                require("../../../assets/icons/bell.png") }
            />
        );
    }
  }, []);

  return (
    <View style={style.tabContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[isFocused && style.activeTab, style.inActiveTab]}>
            <View>{<MenuIcons label={label} status={isFocused} />}</View>
            <View>
              <SizedBox height={1} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};