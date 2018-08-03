import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';

import { list, colors } from '../utils/constant';

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'Reactive'
  }

  render() {
    const { navigate } = this.props.navigation

    let data = [
      {name: 'Button'},
      {name: 'List'},
      {name: 'Form'},
      {name: 'Gallery', params: {
        images: [
          'http://a.hiphotos.baidu.com/image/pic/item/f9198618367adab46aaccc9687d4b31c8601e4e3.jpg',
          'http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c080665b767067b02087af4f492.jpg',
          'http://h.hiphotos.baidu.com/image/pic/item/0824ab18972bd4070a6c702677899e510eb30945.jpg',
        ]
      }},
      {name: 'Stream'},
      {name: 'Nesting'},
      {name: 'Navigator'},
    ]

    return <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item, index}) => <TouchableOpacity
          onPress={() => navigate(item.name, _.get(item, 'params', {}))}
          style={[styles.item, 0==index && styles.head]}>
          <View style={styles.left}>
            <Text style={styles.label}>{item.name}</Text>
          </View>
          <View style={styles.right}>
            <View style={styles.arrow}></View>
          </View>
        </TouchableOpacity>}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 9.6,
    borderColor: list.border,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    backgroundColor: list.background,
    // backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
  },
  item: {
    minHeight: 43.8,
    marginLeft: 15,
    borderColor: list.border,
    borderTopWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  head: {
    minHeight: 44,
    borderTopWidth: 0,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 20,
    borderColor: list.border,
    borderWidth: 1,
    marginRight: 10,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    minWidth: 70,
    color: colors.black,
    fontSize: 16,
    marginRight: 10,
  },
  brief: {
    color: list.brief,
    fontSize: 14,
  },
  extra: {
    color: list.extra,
    fontSize: 14,
  },
  arrow: {
    width: 35,
    height: 20,
    borderColor: list.border,
    borderWidth: 1,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
  }
})