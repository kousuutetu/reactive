import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Input from '../components/input'

import { list, colors } from '../utils/constant'

export default class Screen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const  { goBack } = navigation

    return {
      headerTitle: 'Form',
      headerRight: (<TouchableOpacity onPress={() => goBack()}>
          <Text style={{
            color: '#ffffff',
            fontSize: 14,
            marginHorizontal: 16,
          }}>保存</Text>
        </TouchableOpacity>),
    }
  }

  render() {
    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          <View style={[styles.item]}>
            <View style={styles.left}>
              <Text style={styles.label}>联系人</Text>
            </View>
            <View style={styles.right}>
              <Input
                placeholder='名字'
                placeholderTextColor={list.placeholder}
                style={styles.input} />
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={styles.left}>
              <Text style={styles.label}>手机号码</Text>
            </View>
            <View style={styles.right}>
              <Input
                placeholder='11位手机号'
                placeholderTextColor={list.placeholder}
                style={styles.input} />
            </View>
          </View>
          <View style={[styles.item, styles.last]}>
            <View style={styles.left}>
              <Text style={styles.label}>所在地区</Text>
            </View>
            <View style={styles.right}>
              <Text style={{flex: 1,color: list.placeholder}}>地区信息</Text>
              <View style={styles.arrow}></View>
            </View>
          </View>
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