const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0]
    this.turnCount = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turnCount += 1
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck.cards[this.turnCount]
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.turnCount)) * 100)
  }
  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(message)
    return message
  }
}

module.exports = Round