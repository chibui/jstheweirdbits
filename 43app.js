// 43. whitespace 
// white spaces and comments do not affect the parsing of code. JS engine will skip

var 
// first name of person
firstName, 

// last name of person
lastName, 

// language of person
language;

var person = {
  // the first name
  firstName: 'John',
  // the last name
  // always required
  lastName: 'Doe'
}

console.log(person.firstName)