/* eslint-disable react/prop-types */
import Card from '../Card/Card'
import './Deck.css'

const Deck = ({cards, onCardClick}) => {



  return (
    <div className='deck'>
      {cards.length > 0 && cards.map((card, index) => (
        <Card
          key={index}
          suit={card.suit}
          value={card.value}
          color={card.color}
          index={index}
          totalCards={cards.length}
          onClick={onCardClick}
        />
      ))}
    </div>
  )
}

export default Deck