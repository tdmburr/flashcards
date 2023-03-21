const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', () => {
  var cardOne, turn
  beforeEach(() => {
    cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    turn = new Turn()
  })

  it('should be a function', () => {
    
    expect(Turn).to.be.a('function')
  })

  it('should instantiate a new turn', () => {

    expect(turn).to.be.instanceOf(Turn)
  })

  it('should represent a guess, and a card object', () => {
    turn = new Turn("array", cardOne)

    expect(turn.guess).to.equal("array")
    expect(turn.card).to.equal(cardOne)
  })

  it('should return a guess', () => {
    turn = new Turn("array", cardOne)

    expect(turn.returnGuess()).to.equal("array")
  })

  it('should return a card', () => {
    turn = new Turn("array", cardOne)

    expect(turn.returnCard()).to.equal(cardOne)
  })

  it('should evaluate if an answer is true or false', () => {
    turn = new Turn("object", cardOne)

    expect(turn.evaluateGuess()).to.equal(true)

    turn = new Turn("array", cardOne)
    
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback if the answer is correct or not', () => {
    turn = new Turn("object", cardOne)

    expect(turn.giveFeedback()).to.equal("correct!")

    turn = new Turn("array", cardOne)
    
    expect(turn.giveFeedback()).to.equal("incorrect!")
  })
})