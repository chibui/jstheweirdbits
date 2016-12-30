// 38. Arrays, collections of anything

var arr = [
  // numbers
  1, 
  //booleans
  false,
  // object literals
  {
      name: 'Chi',
      address: '123 blah st'
  },
  // and even function expressions
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  // and of course strings
  "hello"
];

console.log(arr);
arr[3](arr[2].name) // we can then reference any element in the array and even invoke a function.