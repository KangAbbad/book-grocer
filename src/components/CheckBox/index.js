import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Colors, BaseStyles } from '../../constant'

class CheckBox extends Component {
  render () {
    const { onPress } = this.props
    return (
      <TouchableOpacity
        style={styles['container']}
        onPress={onPress}
      >
        {this.renderCheckIcon()}
        {this.renderLabel()}
      </TouchableOpacity>
    )
  }

  renderCheckIcon = () => {
    const { checked } = this.props

    let style = styles['checkbox']
    if (checked) {
      style = [styles['checkbox'], styles['checkbox--on']]
    } else {
      style = [styles['checkbox'], styles['checkbox--off']]
    }

    return (
      <View style={style}>
        <FontAwesome5
          name='check'
          color={Colors.White}
          size={EStyleSheet.value('9rem')}
        />
      </View>
    )
  }

  renderLabel = () => {
    const { label } = this.props
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--dark-gray'],
          styles['label']
        ]}
      >
        {label}
      </Text>
    )
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func
}

CheckBox.defaultProps = {
  checked: false,
  label: 'Custom Checkbox',
  onPress: () => {}
}

export default CheckBox

const styles = EStyleSheet.create({
  'container': {
    flexDirection: 'row',
    alignItems: 'center'
  },
  'checkbox': {
    borderRadius: '7rem',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '18rem',
    width: '18rem'
  },
  'checkbox--on': {
    backgroundColor: Colors.Green
  },
  'checkbox--off': {
    borderWidth: 1,
    borderColor: Colors.DarkGray,
    borderRadius: '7rem',
    backgroundColor: Colors.White
  },
  'label': {
    marginLeft: '8rem'
  }
})
