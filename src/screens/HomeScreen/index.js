import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Row } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'
import Svg, { Ellipse } from 'react-native-svg'

import { Colors, BaseStyles } from '../../constant'
import Image from '../../components/Image'
import fatherhood from '../../assets/images/webp-converted/Fatherhood.webp'
import timeTravellers from '../../assets/images/webp-converted/How-To-Be-The-Best-In-Time-And-Space.webp'
import emileZola from '../../assets/images/webp-converted/Dissapearance-of-Emile-Zola.webp'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topPicks: [
        {
          book: 'The Dissapearance of Emile Zola',
          author: 'Michael Rosen',
          image: emileZola
        },
        {
          book: 'Father Hood',
          author: 'Marcus Berkmann',
          image: fatherhood
        },
        {
          book: 'The Time Travellers Handbook',
          author: 'Stride Lottie',
          image: timeTravellers
        }
      ]
    }
  }

  render () {
    return (
      <FlatList
        data={[0]}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['container']}
        renderItem={() => {
          return (
            <View style={styles['wrapper']}>
              {this.renderStatusBar()}
              {this.renderHeader()}
              {this.renderTopPicks()}
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
        barStyle='light-content'
        backgroundColor='transparent'
      />
    )
  }

  renderHeader = () => {
    return (
      <View style={styles['header']}>
        <Row style={styles['navbar']}>
          {this.renderTitleSection('Our Top Picks')}
          {this.renderHamburgerMenu()}
        </Row>
      </View>
    )
  }

  renderHamburgerMenu = () => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles['navbar__menu']}
      >
        <Feather
          name='menu'
          size={EStyleSheet.value('23rem')}
          color={Colors.White}
        />
      </TouchableOpacity>
    )
  }

  renderTitleSection = (title) => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--4xl'],
          BaseStyles['text--bold'],
          BaseStyles['text--white']
        ]}
      >
        {title}
      </Text>
    )
  }

  renderTopPicks = () => {
    return (
      <View style={styles['top__carousel__container']}>
        {this.renderTopPicksBackground()}
        {this.renderTopPicksCarousel()}
      </View>
    )
  }

  renderTopPicksBackground = () => {
    const { width } = Dimensions.get('window')

    return (
      <View style={styles['top__carousel__bg']}>
        <Svg
          height={width}
          width={width}
        >
          <Ellipse
            cx={width / 2}
            cy='-20'
            rx={width / 1.75}
            ry={width / 2}
            fill={Colors.Green}
          />
        </Svg>
      </View>
    )
  }

  renderTopPicksCarousel = () => {
    const { topPicks } = this.state
    const { width } = Dimensions.get('window')
    const firstItem = Math.round(topPicks.length / 2) - 1

    return (
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={topPicks}
        firstItem={firstItem}
        inactiveSlideOpacity={0.95}
        inactiveSlideScale={0.75}
        sliderWidth={width}
        itemWidth={EStyleSheet.value('140rem')}
        renderItem={this.renderTopPicksCarouselItem}
      />
    )
  }

  renderTopPicksCarouselItem = ({ item }) => {
    return (
      <View style={styles['top__carousel__item']}>
        <Image
          source={item.image}
          style={styles['top__carousel__item--image']}
        />

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black'],
            BaseStyles['text--center'],
            styles['top__carousel__item--book']
          ]}
        >
          {item.book}
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--dark-gray'],
            styles['top__carousel__item--author']
          ]}
        >
          {item.author}
        </Text>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object
}

export default HomeScreen

const styles = EStyleSheet.create({
  'container': {
    flex: 1,
    backgroundColor: Colors.White
  },
  'wrapper': {
  },
  'header': {
    backgroundColor: Colors.Green,
    paddingTop: '60rem'
  },
  'navbar': {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20rem'
  },
  'navbar__menu': {
    paddingVertical: '15rem',
    paddingHorizontal: '20rem'
  },
  'top__carousel__bg': {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  'top__carousel__container': {
    paddingTop: '15rem'
  },
  'top__carousel__item': {
    alignItems: 'center',
    justifyContent: 'center'
  },
  'top__carousel__item--book': {
    paddingHorizontal: '20rem',
    marginTop: '25rem'
  },
  'top__carousel__item--author': {
    marginTop: '10rem'
  },
  'top__carousel__item--image': {
    borderRadius: '10rem',
    height: '170rem',
    width: '105rem'
  }
})
