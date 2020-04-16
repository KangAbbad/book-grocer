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

import { Colors, BaseStyles } from '../../constant'
import Button from '../../components/Button'

import BlibliophileBook from '../../assets/icons/blibliophile-book.svg'
import BusinessShop from '../../assets/icons/business-shop.svg'
import Collecting from '../../assets/icons/collecting.svg'
import BookLover from '../../assets/icons/book-lover.svg'
import Leaf1 from '../../assets/icons/leaf-1.svg'
import Leaf2 from '../../assets/icons/leaf-2.svg'

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
        },
        {
          hero: 'Books For\nEvery Taste.',
          subhero: '',
          icon: null
        }
      ],
      activeSlide: 0
    }

    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <View style={styles['container']}>
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
        containerStyle={styles['pagination__container']}
        dotStyle={styles['dot-style']}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
      />
    )
  }

  renderItem = ({ item, index }) => {
    if (index === 3) {
      return this.renderOnboardingLogin({ item, index })
    } else {
      return this.renderOnboardingItem({ item, index })
    }
  }

  renderOnboardingItem = ({ item, index }) => {
    return (
      <View
        key={index}
        style={styles['container']}
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

  renderHeader = ({ hero, subhero = '' }) => {
    const header = hero.includes('Books For')
      ? { marginTop: EStyleSheet.value('120rem') }
      : styles['header']

    return (
      <View style={header}>
        <Text style={this.buildHero()}>
          {hero}
        </Text>

        <Text style={this.buildSubHero()}>
          {subhero}
        </Text>
      </View>
    )
  }

  buildHero = () => {
    return [
      BaseStyles['text'],
      BaseStyles['text--giant-s'],
      BaseStyles['text--green'],
      BaseStyles['text--center']
    ]
  }

  buildSubHero = () => {
    return [
      BaseStyles['text'],
      BaseStyles['text--large'],
      BaseStyles['text--green'],
      BaseStyles['text--center'],
      styles['subhero']
    ]
  }

  renderIcon = (Icon, index) => {
    const height = EStyleSheet.value(index === 2 ? '200rem' : '180rem')
    return index !== 3 && (
      <Icon
        height={height}
        style={styles['hero__icon__wrapper']}
      />
    )
  }

  renderOnboardingLogin = ({ item, index }) => {
    return (
      <View
        key={index}
        style={styles['container']}
      >
        {this.renderStatusBar()}
        {this.renderHeader(item)}
        {this.renderLogin()}
        {this.renderLoginBg01()}
        {this.renderLoginBg02()}
        {this.renderLoginBg03()}
      </View>
    )
  }

  renderLogin = () => {
    return (
      <View style={styles['login__wrapper']}>
        {this.renderLoginBtn('Sign In')}
        {this.renderLoginBtn('Sign Up')}
      </View>
    )
  }

  renderLoginBtn = (title = 'Custom Button') => {
    return (
      <Button
        lg
        title={title}
        containerStyle={styles['login__btn']}
      />
    )
  }

  renderLoginBg01 = () => {
    return (
      <Leaf1
        height={EStyleSheet.value('275rem')}
        width={EStyleSheet.value('100rem')}
        style={styles['login__bg--1']}
      />
    )
  }

  renderLoginBg02 = () => {
    return (
      <Leaf2
        height={EStyleSheet.value('220rem')}
        width={EStyleSheet.value('110rem')}
        style={styles['login__bg--2']}
      />
    )
  }

  renderLoginBg03 = () => {
    return (
      <BookLover
        height={EStyleSheet.value('270rem')}
        width={EStyleSheet.value('345rem')}
        style={styles['login__bg--3']}
      />
    )
  }
}

export default OnboardingScreen

const { height } = Dimensions.get('window')

const styles = EStyleSheet.create({
  'container': {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
    overflow: 'hidden'
  },
  'header': {
    marginTop: '80rem'
  },
  'subhero': {
    opacity: 0.5,
    marginTop: '23rem'
  },
  'hero__icon__wrapper': {
    position: 'absolute',
    top: height / 2.5
  },
  'pagination__container': {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    paddingVertical: '60rem'
  },
  'dot-style': {
    borderRadius: '10rem',
    width: '10rem',
    height: '10rem',
    backgroundColor: Colors.Green
  },
  'login__wrapper': {
    zIndex: 0,
    width: '100%',
    marginTop: '35rem'
  },
  'login__btn': {
    marginHorizontal: '20rem',
    marginTop: '15rem'
  },
  'login__bg--1': {
    position: 'absolute',
    top: 30,
    left: -50
  },
  'login__bg--2': {
    position: 'absolute',
    top: 95,
    right: -72
  },
  'login__bg--3': {
    position: 'absolute',
    bottom: -10,
    left: -163
  }
})
