import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DetailScreen extends Component {
  render () {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
        <View>
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </>
    )
  }
}

export default DetailScreen
