class Card {
  constructor(Id, question, answers, correctAnswer) {
    this.id = Id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;