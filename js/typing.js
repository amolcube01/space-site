var elemQ = document.getElementById('question');
var elemA = document.getElementById('answer');

var typeQ = new Typewriter(elemQ, {
  loop: false,
  typingSpeed: 30,
  deleteSpeed: 20,
  cursor: '',
  animateCursor: false
});
var typeA = new Typewriter(elemA, {
  loop: false,
  typingSpeed: 30,
  deleteSpeed: 20,
  cursor: '',
  animateCursor: false
});

typeQ.pauseFor(500).typeString('What we have to offer ?')
  .pauseFor(9500)
  .deleteAll()
  .pauseFor(500)
  .typeString('Build your first prototype')
  .pauseFor(10050)
  .deleteAll()
  .pauseFor(1200)
  .typeString('So what are you waiting for ?')
  .typeString(' ')
  .start();

typeA.pauseFor(2500)
  .typeString('Rapid Prototyping')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Agile Development')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Microservices')
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(3300)
  .typeString('In a month ?')
  .pauseFor(1500)
  .deleteChars(9)
  .typeString('two weeks ?')
  .pauseFor(1500)
  .deleteChars(11)
  .typeString('just a week !')
  .pauseFor(1500)
  .typeString(' That\'s right !')
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(4000)
  .typeString('Get started with us today !')
  .typeString(' ')
  .start()
