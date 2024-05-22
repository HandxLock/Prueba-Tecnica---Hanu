import Button from '../Button/Button'
import Order from '../Order/Order'
import './Game.css'
import useCardGame from '../../hooks/useCardGame'
import Deck from '../Deck/Deck'
const Game =()=> {
  const {
    leftDeck,
    setLeftDeck,
    middleDeck,
    setMiddleDeck,
    rightDeck,
    setRightDeck,
    handleCardClick,
    resetGame,
    winningValue,
    hasWon
  } = useCardGame()

  const handleLeftDeckClick = () => {
    handleCardClick(leftDeck, setLeftDeck, middleDeck, setMiddleDeck)
  }

  const handleMiddleDeckClick = () => {
    handleCardClick(middleDeck, setMiddleDeck, rightDeck, setRightDeck)
  }

  const handleRightDeckClick = () => {
    handleCardClick(rightDeck, setRightDeck, leftDeck, setLeftDeck)
  }

  return (
    <div className='game'>
      <div className='gameTop'>
        <Order order={winningValue}/>
        <Button reset={resetGame} />
      </div>
      <div className='gameCenter'>
        {!hasWon && <Deck cards={leftDeck} onCardClick={handleLeftDeckClick}/>}
        {!hasWon && <Deck cards={middleDeck} onCardClick={handleMiddleDeckClick }/>}
        {!hasWon && <Deck cards={rightDeck} onCardClick={handleRightDeckClick}/>}

      </div>
      <div className='gameBottom'>
        {hasWon && <div className='winMessage'>Has Ganado El Juego Felicidades</div>}
      </div>
    </div>
  )
}

export default Game