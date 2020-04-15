import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { YellowBox, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import EStyleSheet from 'react-native-extended-stylesheet'

import OnboardingScreen from './src/screens/OnboardingScreen'
import DetailScreen from './src/screens/DetailScreen'

const Stack = createStackNavigator()

class App extends Component {
  render () {
    YellowBox.ignoreWarnings(['Remote debugger'])
    const fullWidth = Dimensions.get('window').width
    EStyleSheet.build({ $rem: fullWidth / 320 })

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='OnboardingScreen'
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='DetailScreen'
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
