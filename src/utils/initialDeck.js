import { CARD_SUITS, CARD_VALUES } from '../constants/gameConstants'

const suits = Object.keys(CARD_SUITS)

const initialDeck = () => {
  const deck = []
  for (let suit of suits ){
    for (let value of CARD_VALUES){
      deck.push({ suit, value, color: CARD_SUITS[suit].color })
    }
  }
  return deck
}

export default initialDeck