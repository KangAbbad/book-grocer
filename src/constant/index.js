import EStyleSheet from 'react-native-extended-stylesheet'

const Colors = {
  Black: '#1F1F1F',
  White: '#FFFFFF',
  Silver: '#E0E0E0',

  Gray: '#F9F9F9',
  DarkGray: '#AFAFAF',

  Green: '#00AC92',

  Purple: '#1C4A7E',
  DarkPurple: '#202040',

  BrightMaroon: '#B7143C',

  BitterSweetOrange: '#FF6363',
  TartOrange: '#EF4C45',
  OrangePantone: '#F46217',
  MariGold: '#E6A500',

  Brown: '#D36A43',
  Cream: '#FFBD69',

  BlueCerulean: '#09ADE2'
}

const BaseStyles = EStyleSheet.create({
  // Text Size
  'text': {
    fontFamily: 'SFProDisplay-Regular',
    includeFontPadding: false
  },
  'text--giant-l': {
    fontSize: '30rem'
  },
  'text--giant': {
    fontSize: '28rem'
  },
  'text--giant-s': {
    fontSize: '26rem'
  },
  'text--lead': {
    fontSize: '24rem'
  },
  'text--big': {
    fontSize: '22rem'
  },
  'text--4xl': {
    fontSize: '20rem'
  },
  'text--3xl': {
    fontSize: '18rem'
  },
  'text--xxl': {
    fontSize: '16rem'
  },
  'text--xl': {
    fontSize: '14rem'
  },
  'text--large': {
    fontSize: '12rem'
  },
  'text--medium': {
    fontSize: '10rem'
  },
  'text--small': {
    fontSize: '8rem'
  },

  // Text Style
  'text--bold': {
    fontFamily: 'SFProDisplay-Bold'
  },
  'text--normal': {
    fontFamily: 'SFProDisplay-Regular'
  },
  'text--italic': {
    fontStyle: 'italic'
  },
  'text--underline': {
    textDecorationLine: 'underline'
  },

  // Text Align
  'text--center': {
    textAlign: 'center'
  },
  'text--right': {
    textAlign: 'right'
  },

  // Text Color
  'text--black': {
    color: Colors.Black
  },
  'text--white': {
    color: Colors.White
  },
  'text--green': {
    color: Colors.Green
  },
  'text--dark-gray': {
    color: Colors.DarkGray
  }
})

export { BaseStyles, Colors }
