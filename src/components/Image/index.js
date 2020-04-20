import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
// import { Image as RNImage } from 'react-native'

class Image extends Component {
  render () {
    return (
      <FastImage {...this.props} />
      // <RNImage {...this.props} />
    )
  }
}

export default Image
