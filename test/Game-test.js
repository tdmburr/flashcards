const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', () => {
  var game, round, deck, cardOne, cardTwo, cardThree
  beforeEach(() => {
    cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    cardTwo = new Card(2, "What is a comma-separated list of related values?",
    ["array", "object", "function"], "array")
    cardThree = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck = new Deck([cardOne, cardTwo, cardThree])
    round = new Round(deck)
    game = new Game(round)
  })

  it('should be a function', () => {

    expect(Game).to.be.a('function')
  })

  it('should instantiate a new Game', () => {
    
    expect(game).to.be.instanceOf(Game)
  })
  
  it('should keep track of the current round', () => {

    game.useForStart()

    expect(game.currentRound).to.be.instanceOf(Round)
  })

  it('should have a deck to start the game', () => {

    game.useForStart()

    expect(game.currentRound.deck).to.be.instanceOf(Deck)
  })

  it('should have cards in the deck to start the game', () => {

    game.useForStart()

    expect(game.currentRound.deck.cards[0]).to.be.instanceOf(Card)
  })
})
