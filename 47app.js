// 47. Understanding arrays part 2

function buildFunctions() {
  
  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
        function() {
          console.log(i);
        }
    );
  }

  return arr;
}

var fs = buildFunctions();

console.log('------')
fs[0](); // >> 3
fs[1](); // >> 3
fs[2](); // >> 3
console.log('------')

// console.log is not run as it is not invoked. and the for loop pushes a 3 as it is the last count.
// i is now refering to the same i variable in the memory space due to scoping.  
// for this to console.log properly you can turn the function into a IIFE

function buildFunctionsAgain() {
  
  var arr = [];

  for (var i = 0; i < 3; i++) {
    
      arr.push(
          (function(j) {
              return function() {
                  console.log(j); // wrapping this block in a function will create a 
                                  // new execution context for each iteration and 
                                  // pushing the result of the function into the array.
              }
          }(i))
      )
  }
  
  return arr;
}

var fs2 = buildFunctionsAgain();

fs2[0](); // >> 3
fs2[1](); // >> 3
fs2[2](); // >> 3
console.log('------')

// or in ES6 you can use 'let' 
function buildFunctionsOnceAgain() {
  
  var arr = [];

  for (var i = 0; i < 3; i++) {
    let j = i // will scope to this block 
    arr.push(
        function() {
          console.log(j); // points to separately scoped variables.
        });
  }

  return arr;
}

var fs3 = buildFunctionsOnceAgain();

fs3[0]();
fs3[1]();
fs3[2](); 
console.log('------')