import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Colors } from '../../constant'
import Utils from '../../constant/Utils'

class Input extends Component {
  render () {
    return (
      <TextInput
        {...this.props}
        style={Utils.customStyle(styles['form__input'], this.props.style)}
      />
    )
  }
}

Input.defaultProps = {
  style: {}
}

Input.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Input

const styles = EStyleSheet.create({
  'form__input': {
    borderRadius: '15rem',
    height: 'auto',
    backgroundColor: Colors.Gray,
    fontSize: '12rem',
    color: Colors.Black,
    paddingVertical: '13rem',
    paddingHorizontal: '18rem'
  }
})
