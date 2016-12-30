// 31. Objects and object literals

// {}; is shorthand for 'new Object();'
var chi = {
  firstname:  'Chi',
  lastname:   'Bui',
  address: {
    street: '111 Main St.',
    city:   'Sydney',
    state:  'NSW'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
};

greet(chi);

greet({
  firstname:  'Mary',
  lastname:   'Doe'
});

dkjfskjdfhksf


// Mixing methodologies

chi.address2 = {
  street: '222 Second St.'
};

console.log(chi.address2.street);
