var person = new Object();

person["firstname"] = 'Chi';
person.lastname = 'Bui';

console.log(person.firstname + ' ' + person.lastname);

person.address = new Object();
person.address.street = '111 main street';
person["address"]["city"] = 'New York';
person.address.state = 'NY'

console.log(person.address);
