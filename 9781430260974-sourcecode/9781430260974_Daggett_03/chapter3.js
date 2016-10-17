/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/

// Free Variable
var iAmFree = 'Free to be me!';

function canHazAccess(notFree){

  var notSoFree = "i am bound to this scope";

  // => "Free to be me!"
  console.log(iAmFree);
}

// => ReferenceError: notSoFree is not defined
console.log(notSoFree)

canHazAccess();
var Car, tesla;
Car = function() {
  this.start = function() {
    console.log("car started");
  };

  this.turnKey = function() {
    var carKey = document.getElementById('car_key');
    carKey.onclick = function(event) {
      this.start();
    };
  };
  return this;
};
tesla = new Car();

// Once a user clicks the #carKey element they will see "Uncaught TypeError: Object has no method 'start'"
tesla.turnKey();
var Car, tesla;
Car = function() {
  this.start = function() {
    console.log("car started");
  };
  this.turnKey = function() {
    var that = this;
    var carKey = document.getElementById('carKey');
    carKey.onclick = function(event) {
      that.start();
    };
  };
  return this;
};
tesla = new Car();

// Once a user click's the #carKey element they will see "car started"
tesla.turnKey();

for (var x = 0; x < 10; x++){
  var foo = "bar";
}

// => 'bar'
console.log(foo);

var x, foo;
for (x = 0; x < 10; x++) {
  foo = "bar";
}

// => 'bar'
console.log(foo);


for (var x = 0; x < 10; x++) {
  let foo = "bar";

  // => bar
  console.log(foo);
}
// => ReferenceError: foo is not defined
console.log(foo);
function outer(name) {
  var hello = "hi",
  inner;

  return inner = function() {
    return hello + " " + name;
  };
}

// Create and use the closure
var name = outer("mark")();

// => 'hi mark'
console.log(name);


var outer (name) => { 
  var hello = "hi", 
  inner;

  inner => hello + " " + name;
}
var name = outer("mark")();

// => 'hi mark'
console.log(name);

var car;
function carFactory(kind) {
  var wheelCount, start;
  wheelCount = 4;
  start = function() {
    console.log('started with ' + wheelCount + ' wheels.');
  };

  // Closure created here.
  return (function() {
    return {
      make: kind,
      wheels: wheelCount,
      startEngine: start
    };
  }());
}

car = carFactory('Tesla');

// => Tesla
console.log(car.make);

// => started with 4 wheels.
car.startEngine();
var Car, proxy, tesla;
Car = function() {
  this.start = function() {
    return console.log("car started");
  };
  this.turnKey = function() {
    var carKey;
    carKey = document.getElementById("carKey");
    carKey.onclick = proxy(function(event) {
      this.start();
    }, this);
  };
  return this;
};

// Use a closure to bind the outer scope's reference to this into the newly created inner scope.
proxy = function(callback, self) {
  return function() {
    return callback.apply(self, arguments);
  };
};

tesla = new Car();

// Once a user click's the #carKey element they will see "car started"
tesla.turnKey();
var getUniqueId = (function() {
  var id = 0;
  return function(element) {
    if (!element.id) {
      element.id = 'generated-uid-' + id++;
    }
    return element.id;
  };
})();

var elementWithId = document.createElement('p');
elementWithId.id = 'foo-bar';
var elementWithoutId = document.createElement('p');

// => 'foo-bar'
getUniqueId(elementWithId);

// => 'generated-id-0'
getUniqueId(elementWithoutId);

// Create a closure
var SecretStore = (function() {
  var data, secret, newSecret;

  // Emulation of a private variables and functions
  data = 'secret';
  secret = function() {
    return data;
  }
  newSecret = function(newValue) {
    data = newValue;
    return secret();
  }

  // Return an object literal which is the only way to access the private data.  
  return {
    getSecret: secret,
    setSecret: newSecret,
  };
})();

var secret = SecretStore;

// => "secret"
console.log(secret.getSecret());

// => "foo"
console.log(secret.setSecret("foo"));

// => "foo"
console.log(secret.getSecret());

var secret2 = SecretStore;

// => "foo"
console.log(secret2.getSecret());

