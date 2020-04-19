import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'

class Image extends Component {
  render () {
    return (
      <FastImage
        {...this.props}
      />
    )
  }
}

export default Image
