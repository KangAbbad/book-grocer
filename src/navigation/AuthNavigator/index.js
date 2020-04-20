import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OnboardingScreen from '../../screens/OnboardingScreen'
import LoginScreen from '../../screens/LoginScreen'
import StoreLocatorScreen from '../../screens/StoreLocatorScreen'
import HomeScreen from '../../screens/HomeScreen'

const Stack = createStackNavigator()

class AuthNavigator extends Component {
  render () {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='OnboardingScreen'
          component={OnboardingScreen}
        />

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />

        <Stack.Screen
          name='StoreLocatorScreen'
          component={StoreLocatorScreen}
        />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />
      </Stack.Navigator>
    )
  }
}

export default AuthNavigator
