// 34. Functions are objects

// First class functions:
//
// everything you can do with other data types (objects, strings, booleans, variables) you can do with functions.
// Assign them to variables, pass them around, create them on the fly.
// You can attach Primitives objects, functions.

// basic function, with 'name', 'code'
function greet() {
  console.log('hi');
};

// attaching a property to a function
greet.language = 'english';

// accessing the property of a function
console.log(greet.language);
