import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, TextInput } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Row } from 'native-base'
import { Colors, BaseStyles } from '../../constant'
import Ionicons from 'react-native-vector-icons/Ionicons'

class SearchBar extends Component {
  render () {
    return (
      <Row style={styles['container']}>
        {this.renderSearchInput()}
        {this.renderCancelBtn()}
      </Row>
    )
  }

  renderSearchInput = () => {
    return (
      <Row style={styles['input-box__container']}>
        {this.renderIcon()}
        {this.renderInputBox()}
      </Row>
    )
  }

  renderIcon = () => {
    return (
      <Ionicons
        name='ios-search'
        size={EStyleSheet.value('16rem')}
        color={Colors.Black}
        style={styles['input-box__icon']}
      />
    )
  }

  renderInputBox = () => {
    const { placeholder } = this.props
    return (
      <TextInput
        autoFocus
        placeholderTextColor={Colors.DarkGray}
        placeholder={placeholder}
        style={styles['input-box']}
      />
    )
  }

  renderCancelBtn = () => {
    return (
      <TouchableOpacity
        onPress={() => {}}
      >
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            styles['cancel__title']
          ]}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    )
  }
}

SearchBar.propTypes = {
  navigation: PropTypes.object,
  placeholder: PropTypes.string
}

SearchBar.defaultProps = {
  placeholder: 'Custom Placeholder'
}

export default SearchBar

const styles = EStyleSheet.create({
  'container': {
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  'input-box__container': {
    borderRadius: '15rem',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: Colors.Gray,
    marginLeft: '20rem'
  },
  'input-box__icon': {
    marginRight: '10rem',
    marginLeft: '15rem'
  },
  'input-box': {
    flex: 1,
    height: 'auto',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: '12rem',
    paddingVertical: '10rem',
    paddingRight: '15rem'
  },
  'cancel__title': {
    paddingVertical: '15rem',
    paddingHorizontal: '20rem'
  }
})
