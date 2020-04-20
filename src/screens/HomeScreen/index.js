import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Row } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'
import Svg, { Ellipse } from 'react-native-svg'
// import { Rating } from 'react-native-ratings'
import StarRating from '@williamho6000/react-native-star-rating'

import { Colors, BaseStyles } from '../../constant'
import Image from '../../components/Image'

import fatherhood from '../../assets/images/webp-converted/Fatherhood.webp'
import timeTravellers from '../../assets/images/webp-converted/How-To-Be-The-Best-In-Time-And-Space.webp'
import emileZola from '../../assets/images/webp-converted/Dissapearance-of-Emile-Zola.webp'

import theZoo from '../../assets/images/webp-converted/The-Zoo.webp'
import landPaperGods from '../../assets/images/webp-converted/In-A-Land-Of-Paper-Gods.webp'
import tattleTale from '../../assets/images/webp-converted/Tattletale.webp'

import solidTankGirl from '../../assets/images/webp-converted/Solid-State-Tank-Girl.webp'
import illegal from '../../assets/images/webp-converted/Illegal.webp'
import slugfest from '../../assets/images/webp-converted/Slugfest.webp'

import fatalTree from '../../assets/images/webp-converted/The-Fatal-Tree.webp'
import dayFour from '../../assets/images/webp-converted/Day-Four.webp'
import d2d from '../../assets/images/webp-converted/D2D.webp'

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
      ],
      bestSellers: [
        {
          book: 'The Zoo',
          author: 'Christopher Wilson',
          image: theZoo,
          rate: 4
        },
        {
          book: 'In A Land Of Paper Gods',
          author: 'Rebecca Mackenzie',
          image: landPaperGods,
          rate: 5
        },
        {
          book: 'Tattletale',
          author: 'Sarah J Naughton',
          image: tattleTale,
          rate: 3
        }
      ],
      genres: [
        {
          genre: 'Graphic Novels',
          images: [solidTankGirl, illegal, slugfest]
        },
        {
          genre: 'Adult',
          images: [solidTankGirl, illegal, slugfest]
        }
      ],
      recentViews: [
        {
          book: 'The Fatal Tree',
          author: 'Jake Arnott',
          image: fatalTree
        },
        {
          book: 'Day Four',
          author: 'LOTZ, SARAH',
          image: dayFour
        },
        {
          book: 'Door to Door',
          author: 'Edward Humes',
          image: d2d
        }
      ]
    }
  }

  render () {
    return (
      <FlatList
        data={[0]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['container']}
        renderItem={() => {
          return (
            <View style={styles['wrapper']}>
              {this.renderStatusBar()}
              {this.renderHeader()}
              {this.renderTopPicks()}
              {this.renderBestSeller()}
              {this.renderGenre()}
              {this.renderRecentView()}
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
          {this.renderTitleSection('Our Top Picks', 'text--white')}
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

  renderTitleSection = (title, color = 'text--black') => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--4xl'],
          BaseStyles['text--bold'],
          BaseStyles[color],
          styles['title__section']
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
        inactiveSlideShift={EStyleSheet.value('-20rem')}
        sliderWidth={width}
        itemWidth={EStyleSheet.value('140rem')}
        renderItem={this.renderTopPicksItem}
      />
    )
  }

  renderTopPicksItem = ({ item }) => {
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

  renderBestSeller = () => {
    return (
      <View style={styles['swiper-list']}>
        {this.renderTitleSection('Best Sellers')}
        {this.renderBestSellerCarousel()}
      </View>
    )
  }

  renderBestSellerCarousel = () => {
    const { bestSellers } = this.state
    return (
      <FlatList
        data={bestSellers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderBestSellerItem}
        contentContainerStyle={styles['swiper-list__carousel']}
      />
    )
  }

  renderBestSellerItem = ({ item }) => {
    return (
      <View style={styles['swiper-list__item']}>
        <Image
          source={item.image}
          style={styles['swiper-list__item--image']}
        />

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            styles['swiper-list__item--book']
          ]}
        >
          {item.book}
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--medium'],
            BaseStyles['text--dark-gray'],
            styles['swiper-list__item--author']
          ]}
        >
          by {item.author}
        </Text>

        <StarRating
          disabled
          maxStars={5}
          rating={item.rate}
          starSize={EStyleSheet.value('10rem')}
          fullStarColor={Colors.Green}
          emptyStar='star'
          emptyStarColor={Colors.DarkGray}
          containerStyle={styles['swiper-list__item--star']}
        />
      </View>
    )
  }

  renderGenre = () => {
    return (
      <View style={styles['genre']}>
        {this.renderTitleSection('Genres')}
        {this.renderGenreCarousel()}
      </View>
    )
  }

  renderGenreCarousel = () => {
    const { genres } = this.state
    return (
      <FlatList
        data={genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderGenreItem}
        contentContainerStyle={styles['genre__carousel']}
      />
    )
  }

  renderGenreItem = ({ item }) => {
    const { genres } = this.state
    const colors = [Colors.Green, Colors.Purple, Colors.Cream, Colors.Orange]
    let backgroundColor

    for (var i = 0; i < genres.length; i++) {
      backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }

    const style = [
      styles['genre__item'],
      { backgroundColor }
    ]

    return (
      <View style={style}>
        {this.renderGenreItemImages(item.images)}
        {this.renderGenreItemTitle(item.genre)}
      </View>
    )
  }

  renderGenreItemImages = (images) => {
    return (
      <Row>
        {images.map((item, index) => {
          const style = [styles['genre__item--image']]
          if (index === 1) style.push({ marginTop: EStyleSheet.value('5rem') })
          return (
            <Image
              key={index}
              source={item}
              style={style}
            />
          )
        })}
      </Row>
    )
  }

  renderGenreItemTitle = (title) => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--large'],
          BaseStyles['text--white'],
          BaseStyles['text--bold'],
          BaseStyles['text--center'],
          styles['genre__item--title']
        ]}
      >
        {title}
      </Text>
    )
  }

  renderRecentView = () => {
    return (
      <View style={styles['swiper-list']}>
        {this.renderTitleSection('Recently Viewed')}
        {this.renderRecentViewCarousel()}
      </View>
    )
  }

  renderRecentViewCarousel = () => {
    const { recentViews } = this.state
    return (
      <FlatList
        data={recentViews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderRecentViewItem}
        contentContainerStyle={styles['swiper-list__carousel']}
      />
    )
  }

  renderRecentViewItem = ({ item }) => {
    return (
      <View style={styles['swiper-list__item']}>
        <Image
          source={item.image}
          style={styles['swiper-list__item--image']}
        />

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            styles['swiper-list__item--book']
          ]}
        >
          {item.book}
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--medium'],
            BaseStyles['text--dark-gray'],
            styles['swiper-list__item--author']
          ]}
        >
          by {item.author}
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
    paddingBottom: '30rem'
  },
  'header': {
    backgroundColor: Colors.Green,
    paddingTop: '60rem'
  },
  'title__section': {
    paddingLeft: '20rem'
  },
  'navbar': {
    alignItems: 'center',
    justifyContent: 'space-between'
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
    paddingTop: '10rem'
  },
  'top__carousel__item': {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5rem'
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
    width: '110rem',
    elevation: 7
  },
  'swiper-list': {
    marginTop: '15rem'
  },
  'swiper-list__carousel': {
    paddingHorizontal: '10rem',
    marginTop: '15rem'
  },
  'swiper-list__item': {
    padding: '10rem'
  },
  'swiper-list__item--book': {
    width: '110rem',
    marginTop: '15rem'
  },
  'swiper-list__item--author': {
    marginTop: '5rem'
  },
  'swiper-list__item--image': {
    borderRadius: '10rem',
    height: '180rem',
    width: '110rem',
    elevation: 5
  },
  'swiper-list__item--star': {
    paddingTop: '8rem',
    paddingRight: '45rem'
  },
  'genre': {
    marginTop: '30rem',
    marginBottom: '30rem'
  },
  'genre__carousel': {
    paddingHorizontal: '10rem',
    marginTop: '15rem'
  },
  'genre__item': {
    borderRadius: '15rem',
    paddingTop: '20rem',
    paddingRight: '22rem',
    paddingBottom: '15rem',
    paddingLeft: '32rem',
    marginHorizontal: '10rem'
  },
  'genre__item--title': {
    marginTop: '15rem'
  },
  'genre__item--image': {
    borderRadius: '10rem',
    height: '112rem',
    width: '72rem',
    marginLeft: '-10rem'
  }
})
