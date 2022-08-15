import React from 'react';
import { View } from 'react-native';
/* ANCHOR SIZED BOX */
interface SizedBox {
  height?: number;
  width?: number;
  backgroundColor?: any;
  flex?: number;
  borderColor?: string;
}
export const SizedBox = ({
  width,
  height,
  flex,
  backgroundColor,
  borderColor,
}: SizedBox) => {
  return (
    <View
      style={[
        {
          width,
          height,
          flex,
          backgroundColor,
        },
        // @ts-ignore
        borderColor && { borderWidth: 0.331, borderColor },
      ]}
    />
  );
};