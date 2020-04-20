import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { YellowBox, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import EStyleSheet from 'react-native-extended-stylesheet'

import AuthNavigator from './src/navigation/AuthNavigator'
import MainNavigator from './src/navigation/MainNavigator'

const Stack = createStackNavigator()

class App extends Component {
  render () {
    YellowBox.ignoreWarnings([
      'Remote debugger',
      'FlatList: Calling `getNode()`'
    ])
    const fullWidth = Dimensions.get('window').width
    EStyleSheet.build({ $rem: fullWidth / 320 })

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name='Auth'
            component={AuthNavigator}
          />
          <Stack.Screen
            name='Main'
            component={MainNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
