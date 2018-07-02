import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { list, colors } from '../utils/constant'

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'List'
  }

  render() {
    const icon = <Text>Icon</Text>

    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          <View style={[styles.item, styles.last, {height: 87}]}>
            <View style={styles.left}>
              <View style={[styles.icon, {
                width: 65,
                height: 65,
                borderColor: list.border,
                borderWidth: 1,
                marginRight: 10,
              }]}></View>
              <View style={styles.content}>
                <Text style={styles.label}>Jeff</Text>
                <Text style={styles.brief}>微信号：kousuutetu</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.item, styles.last]}>
            <View style={styles.left}>
              { icon ? <View style={styles.icon}>{icon}</View> : null }
              <View style={styles.content}>
                <Text style={styles.label}>钱包</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.item}>
            <View style={styles.left}>
              <View style={styles.icon}>
              
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>收藏</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.left}>
              <View style={styles.icon}></View>
              <View style={styles.content}>
                <Text style={styles.label}>相册</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.item, styles.last]}>
            <View style={styles.left}>
              <Text style={styles.label}>关于微信</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.extra}>版本6.7.0</Text>
              <View style={styles.arrow}></View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.item}>
            <View style={styles.left}>
              <Text style={styles.label}>我的地址</Text>
            </View>
          </View>
          <View style={[styles.item, styles.last]}>
            <View style={styles.left}>
              <Text style={styles.label}>我的发票抬头</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.item, {
            height: 60
          }]}>
            <View style={styles.left}>
              <View style={styles.content}>
                <Text style={styles.label}>高先生</Text>
                <Text style={styles.brief}>北京市北京市海淀区SOCO公社30号楼1711</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </View>
          <View style={[styles.item, {
            height: 60
          }]}>
            <View style={styles.left}>
              <View style={styles.content}>
                <Text style={styles.label}>高先生</Text>
                <Text style={styles.brief}>广东省</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </View>
          <View style={[styles.item, styles.last]}>
            <View style={styles.left}>
              <View style={styles.icon}></View>
              <View style={styles.content}>
                <Text style={styles.label}>新增地址</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.arrow}></View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.item, styles.last, {
            height: 60
          }]}>
            <View style={styles.left}>
              <View style={styles.content}>
                <Text style={styles.label}>充值金额 100 元</Text>
                <Text style={styles.brief}>201806280111237205</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
                <Text style={styles.brief}>已充值</Text>
                <Text style={styles.brief}>06-28</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    marginVertical: 9.6,
    borderColor: list.border,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    backgroundColor: list.background,
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
    marginTop: 5,
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