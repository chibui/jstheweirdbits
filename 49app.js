// 49. Closures and Callbacks

function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() { 

      console.log(greeting); // callback function (function that runs when another function finishes running)

  },0);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {
// ...
// });


function tellMeWhenDone(callback) {

  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {

    console.log('I am done!');

});

tellMeWhenDone(function() {
    
    alert('I am done!');

});