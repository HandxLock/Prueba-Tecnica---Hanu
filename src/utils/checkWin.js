const checkWinCondition = (leftDeck, middleDeck, rightDeck, winningValue) => {
  const leftDeckTopCardValue = leftDeck.length > 0 ? leftDeck[0].value : null

  const middleDeckTopCardValue = middleDeck.length > 0 ? middleDeck[0].value : null
  const rightDeckTopCardValue = rightDeck.length > 0 ? rightDeck[0].value : null
  return (
    leftDeckTopCardValue === winningValue &&
    middleDeckTopCardValue === winningValue &&
    rightDeckTopCardValue === winningValue
  )
}
export default checkWinCondition