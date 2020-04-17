import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button as BaseButton } from 'native-base'

import { BaseStyles, Colors } from '../../constant'
import Utils from '../../constant/Utils'

class Button extends Component {
  render () {
    const { onPress } = this.props
    return (
      <BaseButton
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
    const { lg, outline, containerStyle } = this.props
    const customStyles = [styles['btn']]

    if (lg) customStyles.push(styles['btn--large'])
    if (outline) customStyles.push(styles['btn--outline'])

    return Utils.customStyle(customStyles, containerStyle)
  }

  buildBtnTextStyle = () => {
    const { outline } = this.props
    const customStyles = [
      BaseStyles['text'],
      BaseStyles['text--large'],
      BaseStyles['text--white']
    ]

    if (outline) customStyles.push(BaseStyles['text--green'])

    return customStyles
  }
}

Button.propTypes = {
  title: PropTypes.string,
  lg: PropTypes.bool,
  outline: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onPress: PropTypes.func
}

Button.defaultProps = {
  title: 'My Custom Button',
  lg: false,
  outline: false,
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
    height: '38rem'
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
