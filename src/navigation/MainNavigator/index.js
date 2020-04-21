import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../../constant'
import HomeScreen from '../../screens/HomeScreen'
import SearchNavigator from '../SearchNavigator'
import WishlistScreen from '../../screens/WishlistScreen'
import CartScreen from '../../screens/CartScreen'
import EStyleSheet from 'react-native-extended-stylesheet'

const Tab = createBottomTabNavigator()

class MainNavigator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      screens: [
        {
          name: 'HomeScreen',
          component: HomeScreen,
          label: 'Home',
          icon: 'md-home'
        },
        {
          name: 'SearchNavigator',
          component: SearchNavigator,
          label: 'Search',
          icon: 'ios-search'
        },
        {
          name: 'WishlistScreen',
          component: WishlistScreen,
          label: 'Wishlist',
          icon: 'ios-list'
        },
        {
          name: 'CartScreen',
          component: CartScreen,
          label: 'Cart',
          icon: 'md-cart'
        }
      ]
    }
  }

  render () {
    return (
      <Tab.Navigator
        initialRouteName='SearchNavigator'
        tabBarOptions={{
          activeTintColor: Colors.White,
          inactiveTintColor: Colors.Silver,
          style: styles['container'],
          labelStyle: styles['label']
        }}
      >
        {this.renderScreen()}
      </Tab.Navigator>
    )
  }

  renderScreen = () => {
    const { screens } = this.state
    return screens.map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={item.icon}
                color={color}
                size={size}
              />
            )
          }}
        />
      )
    })
  }
}

export default MainNavigator

const styles = EStyleSheet.create({
  'container': {
    borderTopWidth: 0,
    height: '45rem',
    backgroundColor: Colors.Green,
    paddingTop: '5rem'
  },
  'label': {
    marginBottom: '5rem'
  }
})
