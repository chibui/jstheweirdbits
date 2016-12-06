// 36. By Value vs By Reference

// all primatives are by values
var a = 3;
var b;

a = 2;
b = a;

console.log(a);
console.log(b);

// by reference(all objects (including functions))
var c = { greetings: 'hi'};
var d;
var e = { greetings: 'i am e'};
var f;

d = c;
f = e;

e = { greetings: 'i have changed'} //wont mutate as = operator sets up new memory space (new address)
c.greetings = 'changed'; // will mutate

console.log('c-', c);
console.log('d-', d);
console.log('e-', e);
console.log('f-', f);

// by reference (as parameters)

function changeGreeting(obj) {
  obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);

console.log('c-', c);
console.log('d-', d);
