// 35 function statements and function expressions

// Expression:
// A unit of code that results in a value.
// It doesn't have to save a variable.

var a;
// both below are expressions as operators are basicallly functions
  // > a = 3;
  // > 1 + 2;
  //

// Statement 'a === 3' is the expression
  if ( a === 3 ) {

  };

// expressions do work, statements return a value

// Function Statement
  // 'greet' is the functions name
  // will hoist
  function greet() {
    console.log('function statement - hi'); // invokable code
  };

  // Invoking a function
  greet();

// Function Expression
// unnamed but can still reference from variable name
// only hoists the variable which is assigned the primitive 'undefined'
  var anonGreet = function() {
    console.log('function expression - hi'); // invokable code
  };

  anonGreet();


// functional programming
  function log(a) {
    a();
  };

  // function expression available because of first class functions
  // passing a function as a parameter, creating on the fly
  log(function() {
    console.log('hi');
  });
