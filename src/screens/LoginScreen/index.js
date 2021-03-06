import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, Platform, View, TouchableOpacity, Text, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Colors, BaseStyles } from '../../constant'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import Input from '../../components/Input'
import Utils from '../../constant/Utils'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true,
      dataForm: {
        username: '',
        email: '',
        phone: '',
        group_code: '',
        password: ''
      }
    }

    const { status } = props.route.params
    this.signIn = status === 'sign_in'
    this.signUp = status === 'sign_up'
  }

  render () {
    return (
      <FlatList
        data={[0]}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={() => (
          <View style={styles['wrapper']}>
            {this.renderHeader()}
            {this.renderContent()}
          </View>
        )}
        style={styles['container']}
      />
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

  renderHeader = () => {
    return (
      <View style={styles['header']}>
        {this.renderStatusBar()}
        {this.renderBackBtn()}
      </View>
    )
  }

  renderBackBtn = () => {
    return (
      <TouchableOpacity
        style={styles['btn']}
        onPress={this.onBack}
      >
        <Icon
          name='angle-left'
          size={EStyleSheet.value('30rem')}
          color={Colors.Green}
          style={styles['btn--back']}
        />
      </TouchableOpacity>
    )
  }

  onBack = () => {
    this.props.navigation.goBack()
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        {this.renderLead()}
        {this.renderForm()}
        {this.renderSubmitBtn()}
      </View>
    )
  }

  renderLead = () => {
    const title = this.signIn ? 'Sign In' : 'Sign Up'
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
        {title}
      </Text>
    )
  }

  renderForm = () => {
    return (
      <View>
        {this.renderFormInput()}
        {this.renderFormOption()}
      </View>
    )
  }

  renderFormInput = () => {
    const formInput = {
      sign_in: [
        {
          label: 'group_code',
          placeholder: 'Group Special Code (optional)'
        },
        {
          label: 'email',
          placeholder: 'Email Address'
        },
        {
          label: 'password',
          placeholder: 'Password'
        }
      ],
      sign_up: [
        {
          label: 'username',
          placeholder: 'Username'
        },
        {
          label: 'email',
          placeholder: 'Email Address'
        },
        {
          label: 'phone',
          placeholder: 'Phone'
        },
        {
          label: 'group_code',
          placeholder: 'Group Special Code (optional)'
        },
        {
          label: 'password',
          placeholder: 'Password'
        }
      ]
    }

    const data = this.signIn ? formInput.sign_in : formInput.sign_up
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['form']}
        renderItem={({ item, index }) => {
          const secureTextEntry = item.label === 'password'
          const keyboardType = item.label === 'phone'
            ? 'number-pad'
            : item.label === 'email'
              ? 'email-address'
              : 'default'

          return (
            <Input
              key={index}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              placeholder={item.placeholder}
              value={this.state[item.label]}
              style={styles['form__input']}
              onChangeText={(value) => this.onChangeText(item.label, value)}
            />
          )
        }}
      />
    )
  }

  onChangeText = (key, value) => {
    this.setState(prevState => ({
      dataForm: {
        ...prevState.dataForm,
        [key]: value
      }
    }))
  }

  renderFormOption = () => {
    return (
      <View style={styles['form__option']}>
        {this.renderOptionCheckBox()}
        {this.renderOptionPassword()}
      </View>
    )
  }

  renderOptionCheckBox = () => {
    const { checked } = this.state
    const label = this.signIn ? 'Stay Logged In' : 'Please sign me up for the monthly newsletter.'
    return (
      <CheckBox
        checked={checked}
        label={label}
        onPress={this.onCheckBox}
      />
    )
  }

  renderOptionPassword = () => {
    if (this.signIn) {
      return (
        <TouchableOpacity>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--medium'],
              BaseStyles['text--dark-gray']
            ]}
          >
            Forgot Your Password? {this.state.dataForm.username}
          </Text>
        </TouchableOpacity>
      )
    }
  }

  onCheckBox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }))
  }

  renderSubmitBtn = () => {
    const { dataForm } = this.state
    const title = this.signIn ? 'Sign In' : 'Sign Up'

    const disabled = this.signIn
      ? !Utils.emailValidation(dataForm.email) || !dataForm.password
      : !dataForm.username || !Utils.emailValidation(dataForm.email) || !dataForm.password

    return (
      <Button
        lg
        outline={disabled}
        disabled={disabled}
        title={title}
        containerStyle={styles['btn--submit']}
        onPress={this.onSubmit}
      />
    )
  }

  onSubmit = () => {
    return this.signUp
      ? this.props.navigation.navigate('StoreLocatorScreen')
      : () => {}
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object
}

export default LoginScreen

const statusBarHeight = Platform.select({
  android: StatusBar.currentHeight,
  ios: '40rem'
})

const styles = EStyleSheet.create({
  'container': {
    flex: 1,
    backgroundColor: Colors.White
  },
  'wrapper': {
    paddingBottom: '40rem'
  },
  'header': {
    height: '50rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '15rem',
    marginTop: statusBarHeight
  },
  'btn': {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20rem'
  },
  'btn--back': {
    alignSelf: 'center',
    paddingBottom: '2rem'
  },
  'btn--submit': {
    marginTop: '20rem'
  },
  'content': {
    paddingHorizontal: '20rem'
  },
  'lead': {
    marginTop: '15rem'
  },
  'form': {
    marginTop: '10rem'
  },
  'form__input': {
    marginTop: '17rem'
  },
  'form__option': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '18rem'
  },
  'checkbox': {
    // borderRadius: '7rem',
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    left: 0,
    height: '20rem',
    width: '20rem',
    paddingTop: '4rem'
  }
})
