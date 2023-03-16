import * as wordlist from '../data/wordlist'

function onGuess(currentGuess) {
  if (wordlist.checkWord(currentGuess)) console.log('valid guess')
}

export {
  onGuess,
}