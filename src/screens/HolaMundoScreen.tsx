import React from 'react';
import {Text, View} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 25,
        }}>
        Hola Salvador
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
