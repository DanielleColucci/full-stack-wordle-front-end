function checkWinner(guesses, secretWords) {
  return secretWords.every(word => guesses.includes(word))
}

function checkLoss(guesses, guessLimit) {
  if (guesses.length >= guessLimit) return true
  else return false
}

export {
  checkWinner,
  checkLoss, 
}