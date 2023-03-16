function checkWinner(guesses, secretWords) {
  return secretWords.every(word => guesses.includes(word))
}

export {
  checkWinner,
}