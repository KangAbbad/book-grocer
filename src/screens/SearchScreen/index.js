import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StatusBar, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Row } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { FlatGrid } from 'react-native-super-grid'

import { BaseStyles, Colors } from '../../constant'
import Image from '../../components/Image'

import biography from '../../assets/images/webp-converted/Biography.webp'
import business from '../../assets/images/webp-converted/Business.webp'
import children from '../../assets/images/webp-converted/Children.webp'
import cookery from '../../assets/images/webp-converted/Cookery.webp'
import fiction from '../../assets/images/webp-converted/Fiction.webp'
import graphicNovels from '../../assets/images/webp-converted/Graphic-Novels.webp'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: [
        {
          category: 'Genre',
          active: true
        },
        {
          category: 'New Release',
          active: false
        },
        {
          category: 'The Arts',
          active: false
        },
        {
          category: 'Adult',
          active: false
        },
        {
          category: 'Manga',
          active: false
        }
      ],
      typeCategory: [
        {
          title: 'Biography',
          image: biography
        },
        {
          title: 'Business',
          image: business
        },
        {
          title: 'Children',
          image: children
        },
        {
          title: 'Cookery',
          image: cookery
        },
        {
          title: 'Fiction',
          image: fiction
        },
        {
          title: 'Graphic Novels',
          image: graphicNovels
        }
      ]
    }

    this.flatList = createRef()
  }

  render () {
    return (
      <FlatList
        data={[0, 1, 2]}
        keyExtractor={(item, index) => item + index.toString()}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles['container']}
        renderItem={({ item, index }) => {
          switch (index) {
            case 0:
              return this.renderStatusBar()
            case 1:
              return this.renderHeader()
            case 2:
              return this.renderCategoryType()
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
        {this.renderSearchBar()}
        {this.renderCategory()}
      </View>
    )
  }

  renderSearchBar = () => {
    return (
      <Row style={styles['searchbar__wrapper']}>
        {this.renderSearchBarLeft()}
        {this.renderSearchBarRight()}
      </Row>
    )
  }

  renderSearchBarLeft = () => {
    return (
      <TouchableWithoutFeedback
        onPress={this.onSearch}
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

  onSearch = () => {
    this.props.navigation.navigate('SearchFocusScreen')
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

  renderCategory = () => {
    const { category } = this.state
    return (
      <FlatList
        ref={this.flatList}
        flatListRef={React.createRef()}
        data={category}
        keyExtractor={(item, index) => item + index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderCategoryItem}
      />
    )
  }

  renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.onClickCategory(index)}
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

  onClickCategory = (index) => {
    this.setState(prevState => {
      const newDataCategory = []
      let newActive
      prevState.category.map((item, i) => {
        newDataCategory[i] = item
        newActive = !item.active

        if (newDataCategory[i].active && index === i) {
          newDataCategory[index].active = prevState.category[index].active
        } else if (index === i) {
          newDataCategory[index].active = newActive
        } else {
          newDataCategory[i].active = false
        }
      })

      return { category: newDataCategory }
    }, () => {
      this.shuffleList()
      this.goToNextCategory(index)
    })
  }

  goToNextCategory = (index) => {
    this.flatList.current.scrollToIndex({
      index,
      animated: true
    })
  }

  shuffleList = () => {
    this.setState(prevState => {
      const newTypeCategory = prevState.typeCategory
      let currentIndex = newTypeCategory.length
      let temporaryValue
      let randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = newTypeCategory[currentIndex]
        newTypeCategory[currentIndex] = newTypeCategory[randomIndex]
        newTypeCategory[randomIndex] = temporaryValue
      }

      return { typeCategory: newTypeCategory }
    })
  }

  renderCategoryType = () => {
    const { typeCategory } = this.state
    return (
      <FlatGrid
        items={typeCategory}
        fixed
        itemDimension={EStyleSheet.value('135rem')}
        spacing={EStyleSheet.value('15rem')}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderCategoryTypeItem}
        style={styles['type-category']}
      />
    )
  }

  renderCategoryTypeItem = ({ item }) => {
    const { typeCategory } = this.state
    const colors = [
      Colors.BitterSweetOrange,
      Colors.BlueCerulean,
      Colors.BrightMaroon,
      Colors.Brown,
      Colors.DarkPurple,
      Colors.Green,
      Colors.MariGold,
      Colors.OrangePantone,
      Colors.TartOrange
    ]

    let backgroundColor

    for (var i = 0; i < typeCategory.length; i++) {
      backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }

    const style = [
      styles['type-category__item'],
      { backgroundColor }
    ]

    return (
      <View style={style}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--bold'],
            BaseStyles['text--white'],
            styles['type-category__item--title']
          ]}
        >
          {item.title}
        </Text>

        <Image
          source={item.image}
          style={styles['type-category__item--image']}
        />
      </View>
    )
  }
}

SearchScreen.propTypes = {
  navigation: PropTypes.object
}

export default SearchScreen

const styles = EStyleSheet.create({
  'container': {
    backgroundColor: Colors.White
  },
  'header': {
    backgroundColor: Colors.White,
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
  'search__category': {
    paddingVertical: '20rem',
    paddingRight: '13rem',
    paddingLeft: '20rem'
  },
  'type-category': {
    marginTop: '-10rem'
  },
  'type-category__item': {
    borderRadius: '10rem',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20rem',
    paddingTop: '15rem',
    paddingBottom: '25rem'
  },
  'type-category__item--title': {
    letterSpacing: '0.25rem'
  },
  'type-category__item--image': {
    elevation: 10,
    borderRadius: '10rem',
    height: '120rem',
    width: '75rem',
    marginTop: '15rem'
  }
})
