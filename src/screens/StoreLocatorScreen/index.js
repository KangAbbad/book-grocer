import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, Text, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Colors, BaseStyles } from '../../constant'
import Input from '../../components/Input'
import Button from '../../components/Button'

class StoreLocatorScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderLead()}
        {this.renderDesc()}
        {this.renderForm()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='transparent'
      />
    )
  }

  renderLead = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--big'],
          BaseStyles['text--bold'],
          BaseStyles['text--black'],
          styles['lead']
        ]}
      >
        Help Us Help You
      </Text>
    )
  }

  renderDesc = () => {
    return (
      <View style={styles['desc__wrapper']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--dark-gray'],
            styles['desc__text']
          ]}
        >
          It seems as this is your first time using our app, please enter your location so we can filter our result and stock accordingly to your local store.
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--dark-gray'],
            styles['desc__text']
          ]}
        >
          If you choose to skip, you can change your location at any time in your account settings.
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['form']}>
        {this.renderFormInput('State')}
        {this.renderFormInput('City')}
        {this.renderFormBtn()}
      </View>
    )
  }

  renderFormInput = (placeholder) => {
    return (
      <Input
        placeholder={placeholder}
        style={styles['form__input']}
      />
    )
  }

  renderFormBtn = () => {
    return (
      <View style={styles['form__btn']}>
        <Button
          lg
          outline
          title='Next'
          containerStyle={styles['btn--submit']}
        />

        <TouchableOpacity
          style={styles['btn--skip']}
          onPress={() => {}}
        >
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--green']
            ]}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

StoreLocatorScreen.propTypes = {
  navigation: PropTypes.object
}

export default StoreLocatorScreen

const styles = EStyleSheet.create({
  'container': {
    flex: 1,
    backgroundColor: Colors.White
  },
  'lead': {
    marginHorizontal: '20rem',
    marginTop: '75rem'
  },
  'desc__wrapper': {
    marginHorizontal: '20rem',
    marginTop: '8rem'
  },
  'desc__text': {
    lineHeight: '18rem',
    marginTop: '17rem'
  },
  'form': {
    marginHorizontal: '20rem',
    marginTop: '8rem'
  },
  'form__input': {
    marginTop: '17rem'
  },
  'form__btn': {
    marginTop: '30rem',
    alignItems: 'center'
  },
  'btn--submit': {
    width: '100%'
  },
  'btn--skip': {
    marginTop: '27rem'
  }
})
