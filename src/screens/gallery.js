import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Gallery from 'react-native-image-gallery';
import _ from 'lodash';

import { colors } from '../utils/constant';

export default class Screen extends Component {
  static navigationOptions = {
    // headerStyle: {
    //   // backgroundColor: colors.black,
    // }
  }

  render() {
    const { images } = this.props.navigation.state.params

    return <Gallery
      style={styles.container}
      images={images.map((item => {
        return {
          source: {
            uri: item
          }
        }
      }))}
      onLongPress={() => alert('press')}
    />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  }
})