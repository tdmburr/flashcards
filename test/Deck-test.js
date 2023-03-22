const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', () => {
  var deck, cardOne, cardTwo, cardThree
  beforeEach(() => {
    cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    cardTwo = new Card( 2, "What is a comma-separated list of related values?",
    ["array", "object", "function"], "array")
    cardThree = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"],"mutator method")
    deck = new Deck([cardOne, cardTwo, cardThree])
  })
  it('should be a function', () => {
    
    expect(Deck).to.be.a('function')
  })

  it('should instantiate a new Deck', () => {

    expect(deck).to.be.instanceOf(Deck)
  })

  it ('should contain an array of cards', () => {
  
    expect(deck.cards).to.deep.equal([cardOne, cardTwo, cardThree])
  })

  it('should count how many cards are in the deck', () => {

    expect(deck.countCards()).to.equal(3)
  })
})