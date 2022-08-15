import React, {FC, useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';
import { AuthWrapper } from '../../components/wrapper/auth/index';
import * as Animatable from 'react-native-animatable';
import style from './styles';
import SplashFunctions from './_funct';
import {HDP} from '../../helpers/index';


export const SplashScreen: FC = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      SplashFunctions.openApp(navigation);
    }, 2300);
  }, []);
  return (
    <AuthWrapper>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={style.container}>
        <Image 
            source={require('../../assets/icons/yuhub.png')} 
            style={{
                width: HDP(143),
                height: HDP(143),
                resizeMode: 'contain',
            }} 
        />
      </View>
    </AuthWrapper> 
  );
};
