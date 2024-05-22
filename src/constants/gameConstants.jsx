const colors = {
  red: 'red',
  black: 'black'
}

const CARD_VALUES =  [
  'A',
  '2',
  '3',
  '4'
]

const CARD_SUITS = {
  heart : {
    color: colors.red,
    figure: '♥️'
  },
  diamond: {
    color: colors.red,
    figure:'♦️'
  },
  spade:{
    color: colors.black,
    figure: '♠️'
  }

}

export { CARD_VALUES, CARD_SUITS}

  