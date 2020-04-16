import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button as BaseButton } from 'native-base'

import { BaseStyles, Colors } from '../../constant'
import Utils from '../../constant/Utils'

class Button extends Component {
  render () {
    return (
      <BaseButton
        style={this.buildBtnStyle()}
        {...this.props}
      >
        <Text style={this.buildBtnTextStyle()}>
          {this.props.title}
        </Text>
      </BaseButton>
    )
  }

  buildBtnStyle = () => {
    const { containerStyle } = this.props
    if (this.props.lg) {
      return Utils.customStyle(
        [
          styles['btn'],
          styles['btn--large']
        ],
        containerStyle
      )
    }

    return Utils.customStyle(styles['btn'], containerStyle)
  }

  buildBtnTextStyle = () => {
    return [
      BaseStyles['text'],
      BaseStyles['text--large'],
      BaseStyles['text--white']
    ]
  }
}

Button.propTypes = {
  title: PropTypes.string,
  lg: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Button.defaultProps = {
  title: 'My Custom Button',
  lg: false,
  containerStyle: {}
}

export default Button

const styles = EStyleSheet.create({
  'btn': {
    borderRadius: '15rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Green,
    height: '38rem'
  },
  'btn--large': {
    height: '45rem'
  }
})
