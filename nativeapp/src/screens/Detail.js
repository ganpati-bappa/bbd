import React from 'react';
import { View, Text } from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
        }}
      >
        <Text>Detail screen</Text>
      </View>
    );
  }
}
