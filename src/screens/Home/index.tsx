import React from 'react';
import { View, Text } from 'react-native';
import { SvgIcon } from '@components/svg-icon';
import YuhubLogo from '../../assets/svgs/Yuhub_logo.svg';
import { SvgUri } from 'react-native-svg';

export default function Home () {
    return (
        <View>
            {/* <SvgIcon name="YuhubLogo" size={35} /> */}
            <SvgUri
                width="100%"
                height="100%"
                uri={require("@assets/svgs/Yuhub_logo")}
            />
        </View> 
    );
}