const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

let deck;

class Game {
  constructor() {
    this.currentRound; 
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  useForStart() {
    let cards = []
    prototypeQuestions.forEach(card => {
    cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    })
    deck = new Deck(cards)
    this.currentRound = new Round(deck)
  }
  start() {
    this.useForStart()
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}



module.exports = Game;