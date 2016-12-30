// 44. Immediately invoked function expressions (IIFEs)

//  function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('John');

// using a function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('John');
 
// using an immediately invoked function expression (IIFE)
var greeting = function(name) {
  return 'Hello ' + name;
}('Bob');

console.log(greeting);

// classic example of a IIFE
var firstName = 'John';

(function(name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
})(firstName); // you can invoke inside or outside of the parenthesis 