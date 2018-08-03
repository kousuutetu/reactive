import React, { Component, Fragment } from 'react';
import { ToastAndroid, FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import { colors } from '../utils/constant';

export default class Screen extends Component {
  static navigationOptions = {
    headerTitle: 'Stream'
  }

  constructor(props) {
    super(props)
    this.state = {
      volume: 0,
      refreshing: false,
      data: [],
    }
  }

  componentDidMount() {
    this.mockData()
  }

  mockData(append, callback) {
    let begin = _.isEmpty(append) ? this.state.volume : 0
    let end = 50 + begin
    let data = _.isEmpty(append) ? this.state.data : []
    ToastAndroid.show('make data [' + begin + ', ' + end + ']', ToastAndroid.SHORT)
    for (let i = begin; i < end; i++) {
      data.push({key: '' + i})
    }
    this.setState({
      data,
      volume: end,
    }, () => {
      callback && callback()
    })
  }

  onRefresh = () => {
    this.setState({
      volume: 0,
      refreshing: true
    })
    this.mockData(_, () => {
      this.setState({
        refreshing: false
      })
    })
  }

  onEndReached = () => {
    this.mockData(true)
  }

  render() {
    return <FlatList
      data={this.state.data}
      style={styles.list}
      refreshing={this.state.refreshing}
      onRefresh={this.onRefresh}
      onEndReached={() => this.onEndReached()}
      renderItem={({item}) => <Text>{item.key}</Text>}
      ListFooterComponent={<View style={styles.more}><Text>努力加载中...</Text></View>}
      showsVerticalScrollIndicator={false}
    />
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  more: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})