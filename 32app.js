// Faking namespaces

var greet = 'Hello'
var greet = 'Hola'

console.log(greet);

// Container for separate languages
// to stop namespaces collisions

// object literal (contained)
var english = {
  greetings: {
    basic: 'Hello'
  }
};

// dot operator
var spanish = {};
spanish.greetings = {};
spanish.greetings.basic = 'Hola';

console.log(english.greetings.basic);
console.log(spanish.greetings.basic);
