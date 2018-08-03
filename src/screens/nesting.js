import React, { Component, Fragment } from 'react';
import { ToastAndroid, Dimensions, FlatList, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import _ from 'lodash';
import { TabNavigator } from 'react-navigation';

import { colors } from '../utils/constant';

import Stream from './stream';

const Streams = TabNavigator({
  News: {
    screen: Stream,
  },
  Videos: {
    screen: Stream,
  }
}, {
  initialRouteName: 'News',
  lazy: true,
  animationEnabled: false,
  tabBarOptions: {
    style: {
      height: 36,
      backgroundColor: colors.main,
    },
    labelStyle: {
      margin: 0,
      fontSize: 12,
    },
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: colors.white,
    inactiveTintColor: colors.gray,
  },
})

const ScreenHeight = Dimensions.get('window').height - getStatusBarHeight();

class Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: 'Nesting',
      headerLeft: _.get(params, 'isBack', false) ? <TouchableOpacity
        onPress={params.goBack}>
        <Text style={styles.back}>返回</Text>
        </TouchableOpacity> : null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isOnly: false,
      data: [],
      volume: 0,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack
    })
    this.makeData()
  }

  makeData(append, callback) {
    let begin = _.isEmpty(append) ? this.state.volume : 0
    let end = 100 + begin
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

  goBack = () => {
    this.setState({
      isOnly: false,
    }, () => {
      this.props.navigation.setParams({
        isBack: false
      })
    })
  }

  onLayout = (event) => {
    const { layout } = event.nativeEvent
    this.setState({
      point: _.round(layout.y)
    })
  }

  onScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    let offset = _.round(contentOffset.y)
    if (this.state.point == offset) {
      this.setState({
        isOnly: true
      }, () => {
        this.props.navigation.setParams({
          isBack: true
        })
      })
      
    }
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      ToastAndroid.show('refreshed', ToastAndroid.SHORT)
      this.setState({
        refreshing: false
      })
    }, 3000)
  }

  render() {
    return <ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={this.onScroll}
      style={styles.container}
      refreshControl={
        this.state.isOnly ? null : <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
        />}
    >
      {_.get(this.state, 'isOnly', false) ? <Fragment></Fragment> : <Fragment>
        <View style={[styles.screen]}>
          <Text>First Screen</Text>
        </View>
        <View style={styles.middle}>
          <Text>Middle Screen</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.hori}
            data={this.state.data}
            renderItem={({item}) => <Text> {item.key} </Text>}
          />
        </View>
      </Fragment>}
      <View style={[styles.screen]} onLayout={this.onLayout}>
        <Streams navigation={this.props.navigation} />
      </View>
    </ScrollView>
  }
}

Screen.router = Streams.router

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    height: ScreenHeight - 44,
  },
  middle: {
    height: 320,
  },
  caption: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  list: {
    flexDirection: 'column',
    height: ScreenHeight - 80,
  },
  back: {
    color: colors.white,
    paddingHorizontal: 16,
  },
  more: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Screen