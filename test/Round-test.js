const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')
const Turn = require('../src/Turn')

describe('Round', () => {
  var round, deck, cardOne, cardTwo, cardThree
  beforeEach(() => {
    cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    cardTwo = new Card(2, "What is a comma-separated list of related values?",
    ["array", "object", "function"], "array")
    cardThree = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck = new Deck([cardOne, cardTwo, cardThree])
    round = new Round(deck)
  })

  it('should be a function', () => {
    
    expect(Round).to.be.a('function')
  })

  it('should instantiate a new Round', () => {

    expect(round).to.be.instanceOf(Round)
  })

  it('should have a deck', () => {

    expect(round.deck).to.equal(deck)
  })

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(cardOne)
  })

  it('should be able to update the turn count', () => {

    round.takeTurn()

    expect(round.turnCount).to.equal(1)
  })

  it('should change to the next card after a guess', () => {

    round.takeTurn()

    expect(round.currentCard.id).to.equal(2)    
  })

  it('should add an incorrect answer to an array by their id', () => {

    round.takeTurn("array")

    expect(round.incorrectGuesses.length).to.equal(1)
  })

  it('should give feedback regarding whether the answer was correct or incorrect', () => {

    expect(round.takeTurn('object')).to.equal("correct!")
    expect(round.takeTurn('mutator method')).to.equal("incorrect!")
  })

  it('should calculate the number of correct guesses as a percentage', () => {
 
    round.takeTurn('object')
    round.takeTurn('array')
    round.takeTurn('mutator method')
    
    expect(round.calculatePercentCorrect()).to.equal(100)
  })

  it('should display a message at the end of the round', () => {

    round.takeTurn('object')

    expect(round.endRound()).to.equal("** Round over! ** You answered 100% of the questions correctly!")
  })  
})