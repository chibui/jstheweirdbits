// 33. Difference between JSON and object literals
// Javascript Object Notation


// object literal
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

// console.log(objectLiteral);

//JSON
// {
//   "firstname": "Mary",
//   "isAProgrammer": true
// }

// turns object literal into JSON

// a = JSON.stringify(objectLiteral);
// console.log("stringify - predefined ", a);
console.log("stringify - inline     ", JSON.stringify(objectLiteral));


// convert JSON string into Javascript object

var jsonValue = JSON.parse('{ "firstname": "John", "isAProgrammer": false }');

console.log('JSON to object         ',jsonValue);
