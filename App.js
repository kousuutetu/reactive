import React from 'react';
import { AsyncStorage, StatusBar, View, YellowBox } from 'react-native';
import Storage from 'react-native-storage';

import Navigator from './src/navigator';

global.storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
  }

  render() {
    return <View style={{flex: 1}}>
      <StatusBar backgroundColor='#303030' barStyle="light-content" />
      <Navigator />
    </View>
  }
}