import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StatusBar, Text } from 'react-native'
import { Row } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import StarRating from '@williamho6000/react-native-star-rating'

import { Colors, BaseStyles } from '../../../constant'
import SearchBar from '../../../components/SearchBar'
import Image from '../../../components/Image'
import Button from '../../../components/Button'

import heartOfHell from '../../../assets/images/webp-converted/The-Heart-Of-Hell.webp'
import adrennes from '../../../assets/images/webp-converted/Ardennes-1944.webp'
import warOnGothicLine from '../../../assets/images/webp-converted/War-On-The-Gothic-Line.webp'

class SearchFocusScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [
        {
          title: 'The Heart of Hell',
          image: heartOfHell,
          author: 'Mitch Weiss',
          rating: 4,
          desc: 'The unfold story of courage and sacrifice in the shadow of Iwo Jima.'
        },
        {
          title: 'Adrennes 1994',
          image: adrennes,
          author: 'Antony Beevor',
          rating: 4,
          desc: '#1 International bestseller and award winning history book.'
        },
        {
          title: 'War on The Gothic Line',
          image: warOnGothicLine,
          author: 'Christian Jennings',
          rating: 3,
          desc: 'Through the eyes of thirteen men and women from seven different nations.'
        }
      ]
    }
  }

  render () {
    return (
      <FlatList
        data={[0, 1, 2]}
        keyExtractor={(item, index) => item + index.toString()}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        contentContainerStyle={styles['container']}
        renderItem={({ index }) => {
          switch (index) {
            case 0:
              return this.renderStatusBar()
            case 1:
              return this.renderHeader()
            case 2:
              return this.renderContent()
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

  renderContent = () => {
    const { books } = this.state
    return (
      <FlatList
        data={books}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['search-result']}
        ListEmptyComponent={this.renderNoResult}
        renderItem={this.renderSearchResult}
      />
    )
  }

  renderNoResult = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--large'],
          BaseStyles['text--black'],
          BaseStyles['text--center'],
          styles['no-result']
        ]}
      >
        Sorry there are no results for your query.{'\n'}Perhaps try searching something different?
      </Text>
    )
  }

  renderSearchResult = ({ item }) => {
    return (
      <Row style={styles['search-result__item']}>
        {this.renderSearchResultImage(item.image)}
        {this.renderSearchResultInfo(item)}
      </Row>
    )
  }

  renderSearchResultImage = (source) => {
    return (
      <Image
        source={source}
        style={styles['search-result__item__image']}
      />
    )
  }

  renderSearchResultInfo = (info) => {
    return (
      <View style={styles['search-result__item__info']}>
        {this.renderSearchResultTitle(info.title)}
        {this.renderSearchResultAuthor(info.author)}
        {this.renderSearchResultRating(info.rating)}
        {this.renderSearchResultDesc(info.desc)}
        {this.renderSearchResultBtn()}
      </View>
    )
  }

  renderSearchResultTitle = (title) => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--xl'],
          BaseStyles['text--black'],
          BaseStyles['text--bold'],
          styles['search-result__item--title']
        ]}
      >
        {title}
      </Text>
    )
  }

  renderSearchResultAuthor = (author) => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--silver'],
          styles['search-result__item--author']
        ]}
      >
        {author}
      </Text>
    )
  }

  renderSearchResultRating = (rating) => {
    return (
      <StarRating
        disabled
        maxStars={5}
        rating={rating}
        starSize={EStyleSheet.value('8rem')}
        fullStarColor={Colors.Green}
        emptyStar='star'
        emptyStarColor={Colors.Silver}
        containerStyle={styles['search-result__item--star']}
      />
    )
  }

  renderSearchResultDesc = (desc) => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--silver'],
          styles['search-result__item--desc']
        ]}
      >
        {desc}
      </Text>
    )
  }

  renderSearchResultBtn = () => {
    return (
      <Row style={styles['search-result__item--btn']}>
        <Button
          sm
          title='Add to cart'
        />
        <Button
          sm
          outline
          title='Add to wishlist'
          containerStyle={{ marginLeft: EStyleSheet.value('10rem') }}
        />
      </Row>
    )
  }
}

SearchFocusScreen.propTypes = {
  navigation: PropTypes.object
}

export default SearchFocusScreen

const styles = EStyleSheet.create({
  'container': {
    backgroundColor: Colors.White,
    paddingBottom: '30rem'
  },
  'header': {
    backgroundColor: Colors.White,
    paddingTop: '30rem',
    paddingBottom: '10rem'
  },
  'content': {
  },
  'search-result': {
    paddingHorizontal: '20rem'
  },
  'no-result': {
    paddingVertical: '20rem',
    lineHeight: '20rem'
  },
  'search-result__item': {
    marginTop: '20rem'
  },
  'search-result__item__image': {
    borderRadius: '10rem',
    elevation: 7,
    height: '150rem',
    width: '100rem'
  },
  'search-result__item__info': {
    flex: 1,
    paddingLeft: '15rem'
  },
  'search-result__item--title': {
    marginTop: '15rem'
  },
  'search-result__item--author': {
    marginTop: '3rem'
  },
  'search-result__item--star': {
    width: '60rem',
    marginTop: '10rem'
  },
  'search-result__item--desc': {
    marginTop: '10rem'
  },
  'search-result__item--btn': {
    marginTop: '15rem'
  }
})
