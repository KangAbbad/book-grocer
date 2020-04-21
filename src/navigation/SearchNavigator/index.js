import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from '../../screens/SearchScreen'
import SearchFocusScreen from '../../screens/SearchScreen/SearchFocusScreen'

const Stack = createStackNavigator()

class SearchNavigator extends Component {
  render () {
    return (
      <Stack.Navigator
        initialRouteName='SearchScreen'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='SearchScreen'
          component={SearchScreen}
        />

        <Stack.Screen
          name='SearchFocusScreen'
          component={SearchFocusScreen}
        />
      </Stack.Navigator>
    )
  }
}

export default SearchNavigator
