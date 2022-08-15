import {PADDING_HORIZONTAL, WP} from '../../../helpers/index';
import React, {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import style from './styles';

interface Props {
  children: React.ReactNode;
  paddingHorizontal?: number;
}
export const AuthWrapper: FC<Props> = ({
  children,
  paddingHorizontal = WP(PADDING_HORIZONTAL),
}) => {
  return (
    <View style={[style.container, {paddingHorizontal}]}>
      {children}
    </View>
    );
};