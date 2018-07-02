import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, button } from '../utils/constant';

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'Button'
  }

  render() {
    const { goBack } = this.props.navigation

    return <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>
      <View>
        <TouchableOpacity
          onPress={() => goBack()}
          activeOpacity={0.8}
          style={[styles.container]}>
          <Text style={styles.label}>确定</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goBack()}
          activeOpacity={0.8}
          style={[styles.container, {
            backgroundColor: colors.white,
          }]}>
          <Text style={[styles.label, {
            color: colors.black
          }]}>取消</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('再想一下吧')}
          activeOpacity={0.8}
          style={[styles.container, {
            backgroundColor: colors.danger,
          }]}>
          <Text style={styles.label}>删除</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => goBack()}
        activeOpacity={0.8}
        style={[styles.container]}>
        <Text style={styles.label}>提交</Text>
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: button.border,
    borderWidth: 0.2,
    backgroundColor: button.background,
    marginVertical: 7.75,
  },
  label: {
    color: colors.white,
    fontSize: 18,
  },
})