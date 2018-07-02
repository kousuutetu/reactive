import React from 'react'
import { StyleSheet } from 'react-native'

const List = (props) => {
  render() {
    return <View style={styles.list}>
      <View style={[styles.item, styles.last]}>
        <View style={styles.left}>
          <View style={styles.icon}>{icon}</View>
          <View style={styles.content}>
            <Text style={styles.label}>钱包</Text>
          </View>
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 9.6,
    borderColor: '#d9d9d9',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    backgroundColor: '#ffffff',
  }
})