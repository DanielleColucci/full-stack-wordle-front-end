function checkWinner(guesses, secretWords) {
  return secretWords.every(word => guesses.includes(word))
}

function checkLoss(guesses, guessLimit) {
  if (guesses.length >= guessLimit) return true
  else return false
}

function getColorArray(currentGuess, word) {
  let lowerGuessArr = currentGuess.split('')
  let wordArr = word.split('')
  let colorArr = []
  lowerGuessArr.forEach(function(char, idx) {
    if (char === wordArr[idx]) {
      document.getElementById(char).classList.add('green')
      colorArr.splice(idx, 0, 'green')
      lowerGuessArr[idx] = ' '
      wordArr[idx] = ' '
    } 
  }) 
  lowerGuessArr.forEach(function(char, idx) {
    if (wordArr.includes(char) && char !== wordArr[idx]) {
      document.getElementById(char).classList.add('yellow')
      colorArr.splice(idx, 0, 'yellow')
      wordArr[wordArr.indexOf(char)] = ' '
    } else if (char !== ' ') {
      document.getElementById(char).classList.add('grey')
      colorArr.splice(idx, 0, 'grey')
    }
  })
  return colorArr
}

export {
  checkWinner,
  checkLoss, 
  getColorArray
}