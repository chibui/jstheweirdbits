// 39. arguments and spread

function greet(firstname, lastname, language, ...other) {
                                             // ...other wraps all other arguments into a array called other 
                                             // not yet completely available.      
  language = language || 'en'; //sets en as a default if no arguments passed in language
  //next ver of js you can set default above.
  //function greet(firstname, lastname, language = 'en') {
  
  // You can check if there are any arguments. 
  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('-------------------');
    return;
  }  

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg 0: ' + arguments[0]);
  console.log('------------');
};

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en', 'main street babaks');
