// 45. IIFEs and safe code

// IIFE
(function(global,name) {
      // passing in global into function 
  var greeting = 'Hello';
  global.greeting = 'hello'; //mutate global greeting
  console.log(greeting + ' ' + name);

})(window, 'John');
  //invoking window to intentionally mutate global greeting variable