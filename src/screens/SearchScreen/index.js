import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StatusBar, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Row } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { BaseStyles, Colors } from '../../constant'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: [
        {
          category: 'Genre',
          active: true,
          types: [
            {
              title: 'Biography',
              image: ''
            },
            {
              title: 'Business',
              image: ''
            },
            {
              title: 'Children',
              image: ''
            },
            {
              title: 'Cookery',
              image: ''
            },
            {
              title: 'Fiction',
              image: ''
            },
            {
              title: 'Graphic Novels',
              image: ''
            }
          ]
        },
        {
          category: 'New Release',
          active: false,
          types: [
            {
              title: 'Biography',
              image: ''
            },
            {
              title: 'Business',
              image: ''
            },
            {
              title: 'Children',
              image: ''
            },
            {
              title: 'Cookery',
              image: ''
            },
            {
              title: 'Fiction',
              image: ''
            },
            {
              title: 'Graphic Novels',
              image: ''
            }
          ]
        },
        {
          category: 'The Arts',
          active: false,
          types: [
            {
              title: 'Biography',
              image: ''
            },
            {
              title: 'Business',
              image: ''
            },
            {
              title: 'Children',
              image: ''
            },
            {
              title: 'Cookery',
              image: ''
            },
            {
              title: 'Fiction',
              image: ''
            },
            {
              title: 'Graphic Novels',
              image: ''
            }
          ]
        }
      ]
    }

    this.flatList = createRef()
  }

  render () {
    return (
      <FlatList
        data={[0]}
        keyExtractor={(item, index) => item + index.toString()}
        contentContainerStyle={styles['container']}
        renderItem={() => {
          return (
            <View style={styles['container']}>
              {this.renderStatusBar()}
              {this.renderHeader()}
              {this.renderContent()}
            </View>
          )
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
      <View style={styles['searchbar__container']}>
        <Row style={styles['searchbar__wrapper']}>
          {this.renderSearchBarLeft()}
          {this.renderSearchBarRight()}
        </Row>
      </View>
    )
  }

  renderSearchBarLeft = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {}}
      >
        <Row style={styles['searchbar__content--left']}>
          <Ionicons
            name='ios-search'
            size={EStyleSheet.value('16rem')}
            color={Colors.Black}
            style={styles['searchbar__icon']}
          />

          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--dark-gray'],
              styles['searchbar__title']
            ]}
          >
            Search Books, Author, or ISBN
          </Text>
        </Row>
      </TouchableWithoutFeedback>
    )
  }

  renderSearchBarRight = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {}}
      >
        <View style={styles['searchbar__content--right']}>
          <SimpleLineIcons
            name='equalizer'
            size={EStyleSheet.value('16rem')}
            color={Colors.Black}
            style={styles['searchbar__filter']}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderContent = () => {
    const { entries } = this.state
    return (
      <FlatList
        ref={this.flatList}
        flatListRef={React.createRef()}
        data={entries}
        keyExtractor={(item, index) => item + index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderEntries}
      />
    )
  }

  renderEntries = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.goToNextCategory(index)}
        style={styles['search__category']}
      >
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--4xl'],
            BaseStyles['text--bold'],
            item.active
              ? BaseStyles['text--black']
              : BaseStyles['text--dark-gray']
          ]}
        >
          {item.category}
        </Text>
      </TouchableOpacity>
    )
  }

  goToNextCategory = (index) => {
    this.setState(prevState => {
      const newDataEntries = []
      let newActive
      prevState.entries.map((item, i) => {
        newDataEntries[i] = item
        newActive = !item.active

        if (newDataEntries[i].active && index === i) {
          newDataEntries[index].active = prevState.entries[index].active
        } else if (index === i) {
          newDataEntries[index].active = newActive
        } else {
          newDataEntries[i].active = false
        }
      })

      return { entries: newDataEntries }
    }, () => {
      this.flatList.current.scrollToIndex({
        index,
        animated: true
      })
    })
  }
}

SearchScreen.propTypes = {
  navigation: PropTypes.object
}

export default SearchScreen

const styles = EStyleSheet.create({
  'container': {
    backgroundColor: Colors.White,
    paddingBottom: '50rem'
  },
  'searchbar__container': {
    paddingTop: '30rem'
  },
  'searchbar__wrapper': {
    borderRadius: '15rem',
    overflow: 'hidden',
    backgroundColor: Colors.Gray,
    marginHorizontal: '20rem'
  },
  'searchbar__content--left': {
    alignItems: 'center',
    paddingVertical: '13rem',
    paddingRight: '10rem',
    paddingLeft: '17rem'
  },
  'searchbar__content--right': {
    paddingVertical: '13rem',
    paddingHorizontal: '20rem'
  },
  'searchbar__icon': {
    paddingRight: '20rem'
  },
  'searchbar__title': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'searchbar__filter': {
    transform: [{ rotateX: '180deg' }]
  },
  'content': {

  },
  'search__category': {
    paddingVertical: '20rem',
    paddingRight: '13rem',
    paddingLeft: '20rem'
  }
})
