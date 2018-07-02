import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'Navigator'
  }

  render() {
    return <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <Text>Navigator</Text>
    </View>
  }
}