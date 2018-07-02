import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { list, colors } from '../utils/constant';

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'Reactive'
  }

  render() {
    const { navigate } = this.props.navigation

    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => navigate('List')} style={styles.item}>
            <View style={styles.left}>
              <Text style={styles.label}>List</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Form')} style={styles.item}>
            <View style={styles.left}>
              <Text style={styles.label}>Form</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Button')} style={[styles.item]}>
            <View style={styles.left}>
              <Text style={styles.label}>Button</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Navigator')} style={[styles.item, styles.last]}>
            <View style={styles.left}>
              <Text style={styles.label}>Navigator</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  last: {
    minHeight: 44,
    borderBottomWidth: 0,
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