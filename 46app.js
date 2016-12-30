// 46. Understanding Closures part 1

function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  }

}

var sayHi = greet('Yo'); // execution context is pop off stack 

sayHi('Tony'); // but due to closures the scope is still intack and variables are still available