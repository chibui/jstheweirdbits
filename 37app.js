// 37. Objects, functions and 'this'

// function statement
function a() {
  console.log(this);
  this.newvariable = 'hello'; // attaching a variable to 'this' makes it accessible in global
}

// function expression
var b = function() {
  console.log(this);
}

a();

console.log('attached to global - ', newvariable);
b();

//both will return window

// object literal
var c = {
  name: 'The c object',
  log: function() {
    console.log(this); // method of a object. The 'this' keyword relates to the object and no longer global.
  }
}
c.log(); // Returns c which is name: 'The c object',
// log: function() {
//   console.log(this); // method of a object. The 'this' keyword relates to the object and no longer global.
// }

// A javascript bug with scoping 'this'
var d = {
  name: 'The d object',
  log: function() {
    this.name = 'Updated d object'; // mutate d object name to 'updated d object'
    console.log(this);

    var setname = function(newname) { // mutate again
      this.name = newname;
    }
    setname('Updated again! The d object'); // function inside a function of a object
    console.log(this); // the bug is that it will now mutate the global rather than d object
  }
}

// work around to 'this' scoping issue
d.log();
console.log('global', this.name);


var e = {
  name: 'The e object',
  log: function() {
    var self = this;  // assigning 'self' keyword as 'this'
                      // and use it in place of this whilst
                      // in object ensure you dont have to worry about the scoping issue of 'this'

    self.name = 'Updated e object';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated again! The e object');
    console.log(self);
  }
}

e.log();
console.log('global', this.name);
