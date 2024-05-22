/* eslint-disable react/prop-types */
import './Card.css'
import { CARD_SUITS } from '../../constants/gameConstants'

const Card =({suit, value, color, index,totalCards, onClick})=> {
  const cardSuit = CARD_SUITS[suit]
  const zIndex= totalCards-index
  const transform = `translateY(${index * 1}px) translateX(-${index * 1}px)`
  const handleClick = () => {
    onClick(index)
  }

  const countFigure = (value) => {
    const count = value === 'A' ? 1 : parseInt(value)
    return (
      <div className={`count-${count}`}>
      {Array(count).fill(null).map((_, i) => (
        <span key={i}>{cardSuit.figure}</span>
      ))}
    </div>

    )
  }
  return (
    <div className='card' style={{ color, zIndex, transform }} onClick={handleClick}>

      <div className='cardTop'>

        <span>{value}</span>
        <span>{cardSuit.figure}</span>
      </div>
      <div className='cardCenter'>
        {countFigure(value)}
      </div>
      <div className='cardBottom'>
        <span>{value}</span>
        <span>{cardSuit.figure}</span>
      </div>

    </div>
  )
}

export default Card