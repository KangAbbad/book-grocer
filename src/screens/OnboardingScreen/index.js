import React, { Component } from 'react'
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  YellowBox
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { colors } from '../../constant'
import BlibliophileBook from '../../assets/icons/blibliophile-book.svg'
import BusinessShop from '../../assets/icons/business-shop.svg'
import Collecting from '../../assets/icons/collecting.svg'

class OnboardingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onboards: [
        {
          hero: 'Discounted\nSecondhand Books',
          subhero: 'Used and near new secondhand books at great',
          icon: BlibliophileBook
        },
        {
          hero: '20 Books Grocers\nNationally',
          subhero: 'We\'ve successfully opened 20 stores across',
          icon: BusinessShop
        },
        {
          hero: 'Sell or Recycle Your Old\nBooks With Us',
          subhero: 'If you\'re looking to downsize, sell or recycle old\nbooks, Book Grocer can help',
          icon: Collecting
        }
      ],
      activeSlide: 0
    }

    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderCarousel()}
        {this.renderPagination()}
      </View>
    )
  }

  renderCarousel = () => {
    const { onboards } = this.state
    const { height, width } = Dimensions.get('window')
    return (
      <Carousel
        data={onboards}
        sliderWidth={width}
        sliderHeight={height}
        itemWidth={width}
        itemHeight={height}
        renderItem={this.renderItem}
        onSnapToItem={this.onChangeSlide}
      />
    )
  }

  onChangeSlide = (activeSlide) => {
    this.setState({ activeSlide })
  }

  renderPagination = () => {
    const { onboards, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={onboards.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
      />
    )
  }

  renderItem = ({ item, index }) => {
    return (
      <View
        key={index}
        style={styles.container}
      >
        {this.renderStatusBar()}
        {this.renderHeader(item)}
        {this.renderIcon(item.icon, index)}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
    )
  }

  renderHeader = ({ hero, subhero }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.hero}>
          {hero}
        </Text>

        <Text style={styles.subhero}>
          {subhero}
        </Text>
      </View>
    )
  }

  renderIcon = (Icon, index) => {
    const height = EStyleSheet.value(index === 2 ? '200rem' : '180rem')
    return (
      <Icon
        height={height}
        style={styles.heroIconWrapper}
      />
    )
  }
}

export default OnboardingScreen

const { height } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  header: {
    marginTop: '80rem'
  },
  hero: {
    fontSize: '25rem',
    color: colors.green,
    includeFontPadding: false,
    textAlign: 'center'
  },
  subhero: {
    fontSize: '12rem',
    color: colors.green,
    includeFontPadding: false,
    textAlign: 'center',
    opacity: 0.5,
    marginTop: '23rem'
  },
  heroIconWrapper: {
    position: 'absolute',
    top: height / 2.5
  },
  paginationContainer: {
    paddingVertical: '60rem'
  },
  dotStyle: {
    borderRadius: '10rem',
    width: '10rem',
    height: '10rem',
    backgroundColor: colors.green
  }
})
