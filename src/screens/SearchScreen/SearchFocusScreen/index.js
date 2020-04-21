import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Colors } from '../../../constant'
import SearchBar from '../../../components/SearchBar'

class SearchFocusScreen extends Component {
  render () {
    return (
      <FlatList
        data={[0, 1]}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['container']}
        renderItem={({ item, index }) => {
          switch (index) {
            case 0:
              return this.renderStatusBar()
            case 1:
              return this.renderHeader()
            default:
              return this.renderStatusBar()
          }
        }}
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
        <SearchBar
          placeholder='Search Books, Author, or ISBN'
        />
      </View>
    )
  }
}

SearchFocusScreen.propTypes = {
  navigation: PropTypes.object
}

export default SearchFocusScreen

const styles = EStyleSheet.create({
  'container': {
    flex: 1,
    backgroundColor: Colors.White
  },
  'header': {
    paddingTop: '30rem'
  }
})
