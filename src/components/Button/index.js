import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button as BaseButton } from 'native-base'

import { BaseStyles, Colors } from '../../constant'
import Utils from '../../constant/Utils'

class Button extends Component {
  render () {
    const { onPress, disabled } = this.props
    return (
      <BaseButton
        disabled={disabled}
        style={this.buildBtnStyle()}
        onPress={onPress}
      >
        <Text style={this.buildBtnTextStyle()}>
          {this.props.title}
        </Text>
      </BaseButton>
    )
  }

  buildBtnStyle = () => {
    const { sm, lg, outline, containerStyle } = this.props
    const customStyles = [styles['btn']]

    if (sm) customStyles.push(styles['btn--small'])
    if (lg) customStyles.push(styles['btn--large'])
    if (outline) customStyles.push(styles['btn--outline'])

    return Utils.customStyle(customStyles, containerStyle)
  }

  buildBtnTextStyle = () => {
    const { sm, lg, outline } = this.props
    const customStyles = [
      BaseStyles['text'],
      BaseStyles['text--white']
    ]

    if (sm) customStyles.push(BaseStyles['text--medium'])
    if (lg) customStyles.push(BaseStyles['text--large'])
    if (outline) customStyles.push(BaseStyles['text--green'])

    return customStyles
  }
}

Button.propTypes = {
  title: PropTypes.string,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onPress: PropTypes.func
}

Button.defaultProps = {
  title: 'My Custom Button',
  sm: false,
  lg: false,
  outline: false,
  disabled: false,
  containerStyle: {},
  onPress: () => {}
}

export default Button

const styles = EStyleSheet.create({
  'btn': {
    borderRadius: '15rem',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Green,
    height: '38rem',
    paddingHorizontal: '10rem'
  },
  'btn--small': {
    borderRadius: '10rem',
    height: '25rem'
  },
  'btn--large': {
    height: '45rem'
  },
  'btn--outline': {
    borderWidth: 1,
    borderColor: Colors.Green,
    backgroundColor: Colors.White
  }
})
