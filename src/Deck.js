class Deck {
  constructor(cardObjects) {
    this.cards = cardObjects
  }
  countCards() {
    return this.cards.length
  }
}

module.exports = Deck