import { useState, useEffect } from "react"
import initialDeck from "../utils/initialDeck"
import { CARD_VALUES } from '../constants/gameConstants'
import checkWinCondition from '../utils/checkWin.js'

const useCardGame= ()=> {
  const getRandomCardValue = () => CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)]
  const [leftDeck, setLeftDeck] = useState(initialDeck())
  const [middleDeck, setMiddleDeck] = useState([])
  const [rightDeck, setRightDeck]= useState([])
  const [hasWon, setHasWon] = useState(false)

  const [winningValue, setWinningValue] = useState(() => getRandomCardValue())
  const handleCardClick = (sourceDeck, setSourceDeck, targetDeck, setTargetDeck) => {
    if (sourceDeck.length > 0) {
      const card = sourceDeck[0]
      setSourceDeck(sourceDeck.slice(1))
      setTargetDeck([card, ...targetDeck])
    }
  }
  const resetGame = () => {
    setLeftDeck(initialDeck())
    setMiddleDeck([])
    setRightDeck([])
    setWinningValue(getRandomCardValue())
    setHasWon(false)
  }

    useEffect(() => {
      const isWinner = checkWinCondition(leftDeck, middleDeck, rightDeck, winningValue)
      setHasWon(isWinner)
  }, [leftDeck, middleDeck, rightDeck, winningValue])


  return {
    leftDeck,
    setLeftDeck,
    middleDeck,
    setMiddleDeck,
    rightDeck,
    setRightDeck,
    handleCardClick,
    hasWon,
    setHasWon,
    winningValue,
    setWinningValue,
    resetGame
  }
}

export default useCardGame