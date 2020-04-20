import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { BaseStyles } from '../../constant'

class CartScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black']
          ]}
        >
          Cart Screen
        </Text>
      </View>
    )
  }
}

CartScreen.propTypes = {
  navigation: PropTypes.object
}

export default CartScreen

const styles = EStyleSheet.create({
  'container': {
    flex: 1
  }
})
