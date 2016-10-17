/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/

document.getElementById('search').click();

var foo = {},
    bar = new Object(),
    baz = Object.create(null);


var car = {};

// A car can have any number of doors
Object.defineProperty(car, 'doors', {
  configurable: true,
  value: 4
});

// A car must have only four wheels
Object.defineProperty(car, 'wheels', {
  configurable: false,
  value: 4
});

delete car.doors;

// => "undefined"
console.log(car.doors);

delete car.wheels;
// => "4"
console.log(car.wheels);

Object.defineProperty(car, 'doors', {
  configurable: true,
  value: 5
});

// => "5"
console.log(car.doors);

// => Uncaught TypeError: Cannot redefine property: wheels 
Object.defineProperty(car, 'wheels', {
  configurable: true,
  value: 4
});
var car = {};

Object.defineProperty(car, 'doors', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});

Object.defineProperty(car, 'wheels', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});

Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
  enumerable: false,
  value: true
});

// => doors
// => wheels
for (var x in car) {
  console.log(x);
}

// => ["doors", "wheels"]
console.log(Object.keys(car));

// => ["doors", "wheels", "secretTrackingDeviceEnabled"] 
console.log(Object.getOwnPropertyNames(car));

// => false
console.log(car.propertyIsEnumerable('secretTrackingDeviceEnabled'));

// => true
console.log(car.secretTrackingDeviceEnabled);
var car = {};

Object.defineProperty(car, 'wheels', {
  value: 4,
  writable: false
});

// => 4
console.log(car.wheels);

car.wheels = 5;

// => 4
console.log(car.wheels);
var o = {
  foo: 'bar'
};

// Object {value: "bar", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, 'foo');
var box = Object.create({}, {
  openLid: {
    value: function() {
      return "nothing";
    },
    enumerable: true
  },
  openSecretCompartment: {
    value: function() {
      return 'treasure';
    },
    enumerable: false
  }
});

// => ["openLid", "openSecretCompartment"]
console.log(Object.getOwnPropertyNames(box).sort());
var a = {};

// => true
console.log(Object.getPrototypeOf(a) === Object.prototype && Object.prototype === a.__proto__);
var foo = {
  foo: 'foo'
};
var bar = Object.create(foo, {
  bar: {
    enumerable: true,
    value: 'bar'
  }
});

// => bar
// => foo
for (var x in bar) {
  console.log(x);
}

var myProps = Object.getOwnPropertyNames(bar).map(function(i) {
  return bar.hasOwnProperty(i) ? i : undefined;
});

// => ['bar']
console.log(myProps);
var box = Object.create({}, {
  openLid: {
    value: function() {
      return "nothing";
    },
    enumerable: true
  },
  openSecretCompartment: {
    value: function() {
      return 'treasure';
    },
    enumerable: false
  }
});

// => ["openLid"]
console.log(Object.keys(box));

var bombPop = {
  wrapping: 'plastic',
  flavors: ['Cherry', 'Lime', 'Blue Raspberry']
};

// => false
console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;

// undefined;
console.log(bombPop.wrapping);

// prevent further modifications
Object.freeze(bombPop);

delete bombPop.flavors;

// => ["Cherry", "Lime", "Blue Raspberry"] 
console.log(bombPop.flavors);

// => true
console.log(Object.isFrozen(bombPop));
// => true
Object.prototype.isPrototypeOf([]);

// => true
Function.prototype.isPrototypeOf(() = > {});

// => true
Function.prototype.isPrototypeOf(function() {});

// => true
Object.prototype.isPrototypeOf(() = > {});
var car = {
  doors: 4
};

// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);

// => false
console.log(Object.isExtensible(car) === true);
var ziplockBag = {};

// => false
console.log(Object.isSealed(ziplockBag) === true);

// => true
console.log(Object.isExtensible(ziplockBag));

Object.seal(ziplockBag);

// => true
console.log(Object.isSealed(ziplockBag) === true);

// => false
console.log(Object.isExtensible(ziplockBag));
var Car = function(name) {
  this.name = name;
}

var tesla = Object.create(Car.prototype, {
  name: {
    value: 'tesla'
  }
});

// => [Object object]
console.log(tesla.valueOf());

Car.prototype.valueOf = function() {
  return this.name;
}

// => tesla
console.log(tesla.valueOf());
// True because both strings use the same characters and length
Object.is('true', 'true')

// False because type case counts as a difference
Object.is('True', 'true')

// True because function is coersed to true using the logical not operator.
Object.is(!
function() {}(), true)

// True because the built-in Math object has no prototype.
Object.is(undefined, Math.prototype);
// => false
console.log(NaN === 0 / 0);

// => true
Object.is(NaN, 0 / 0);
var bombPop = {
  wrapping: 'plastic',
  flavors: ['Cherry', 'Lime', 'Blue Raspberry']
};

// => false
console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;

// undefined;
console.log(bombPop.wrapping);

// prevent further modifications
Object.freeze(bombPop);

delete bombPop.flavors;

// => ["Cherry", "Lime", "Blue Raspberry"] 
console.log(bombPop.flavors);

// => true
console.log(Object.isFrozen(bombPop));
var car = {};

Object.defineProperties(car, {
  'wheels': {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
  },
  'doors': {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
  }
});

// => 4
console.log(car.doors);

// => 4
console.log(car.wheels);
var car = {};

Object.defineProperty(car, 'doors', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});
var car = {
  doors: 4
};

// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);

// => false
console.log(Object.isExtensible(car) === true);

// => 4
console.log(car.doors);
delete car.doors;

// => undefined
console.log(car.doors);

car.tires = 4;

// => undefined
console.log(car.tires);
var Dog = function() {};
Dog.prototype.speak = function() {
  return "woof";
};

var Cat = function() {};
Cat.prototype.speak = function() {
  return "meow";
};

var Tabby = function() {};
Tabby.prototype = new Cat();
var tabbyCat = new Tabby();

// => 'meow'
console.log(tabbyCat.speak());

// => undefined
console.log(tabbyCat.prototype);

// Setting the prototype of an object instance will not effect the instanciated properites
tabbyCat.prototype = new Dog();

// => Dog { speak: function }
console.log(tabbyCat.prototype);

// => 'meow'
console.log(tabbyCat.speak());
var envelope = {
  letter: 'To whom it may concern'
};

// => false
Object.isSealed(envelope);

Object.seal(envelope);

envelope.letter = "Oh Hai";
envelope.stamped = true;

// => Oh Hai
console.log(envelope.letter);

// => undefined
console.log(envelope.stamped);
var friend = {
  warmth: 0,
  useSweater: function(level) {
    this.warmth = level;
  }
};
var me = {
  warmth: 0,
  isWarm: function() {
    return this.warmth === 100;
  }

};

// => false
console.log(me.isWarm());

try {
  me.useSweater(100);
} catch (e) {
  // => Object #<Object> has no method 'useSweater' 
  console.log(e.message);
}

friend.useSweater.call(me, 100);

// => true
console.log(me.isWarm());

me.warmth = 0;

// => false
console.log(me.isWarm());

friend.useSweater.apply(me, [100]);

// => true
console.log(me.isWarm());
var foo = {
  bar: 'baz'
};

var foo2 = Object.create(Object.prototype, {
  bar: {
    writable: true,
    configurable: true,
    value: 'baz'
  }
});

// => baz
console.log(foo.bar);

// => baz
console.log(foo2.bar);

var foo = new Object();
var bar = {};

// => object
console.log(typeof(foo))

// => object
console.log(typeof(bar))

window.Object = function() {
  arguments.callee.call()
};

// => Uncaught RangeError: Maximum call stack size exceeded
var foo = new Object();

var Animal, cat, dog;

Animal = function(inLove) {
  this.lovesHumans = inLove || false;
};
cat = new Animal();
dog = new Animal(true);

// => false
console.log(cat.lovesHumans);

// => true
console.log(dog.lovesHumans);

/*
 * function (inLove) {
 *   this.lovesHumans = inLove || false;
 * } 
 */
console.log(cat.constructor);

var Animal, cat, dog;

Animal = function(inLove) {
  this.lovesHumans = inLove || false;
};
cat = new Animal();
dog = new Animal(true);

// capture the errors so our script will continue to execute.
try {
  // => Uncaught TypeError: Object [object Object] has no method 'jump' 
  console.log(cat.jump());
} catch (e) {}

/*
 * We can change the base object and have the changes reflected downward even
 * to objects who have already been instantiated.
 */
Animal.prototype.jump = function() {
  return "how high?!";
};

// => how high?!
console.log(cat.jump());

// => how high?!
console.log(dog.jump());

/*
 * Changes to the local property do not propogate up the prototype chain. 
 * Instead, the reference to the prototype's property is blocked by the new local
 * property of the same name.
 */
cat.jump = function() {
  return "no";
}

// => no
console.log(cat.jump());

// => how high?!
console.log(dog.jump());
var Animal, dog;

Animal = function(inLove) {
  this.lovesHumans = inLove || false;
};

// `new` is essentially doing this:
// dog = {}
// dog.lovesHumans = true;
dog = new Animal(true);

var Car = {
  drive: function(miles) {
    return this.odometer += miles;
  }
};

var tesla = Object.create(Car, {
  'odometer': {
    value: 0,
    enumerable: true
  }
});

// => 10
console.log(tesla.drive(10));
public class Car {

  private String name;
  private int wheelCount;

  public String getName() {
    return name;
  }

  public void setName(String newName) {
    name = newName;
  }

  public String getWheelCount() {
    return wheelCount;
  }

  public void setWheelCount(String wheels) {
    wheelCount = wheels;
  }
}

var Car = function() {
    var name = 'Tesla';
    var wheelCount = '4';
    this.getName = function() {
      return name;
    }
    this.getWheelCount = function() {
      return wheelCount;
    }
    this.setName = function(newName) {
      name = newName;
    }
    this.setWheelCount = function(newCount) {
      wheelCount = newCount;
    }
    }
    
var myCar = new Car();

// #=> undefined
console.log(myCar.name);

myCar.name = "Corvette";

// #=> 'Corvette'
console.log(myCar.name);

// #=> 'Tesla'
console.log(myCar.getName());

// #=> 'Corvette'
myCar.setName('Corvette');
console.log(myCar.getName());

// sumation
// => 2
console.log(1 + 1);

// concatination
// => "foo bar"
cConsole.log("foo " + "bar");

// accumilation
// => 2
var num = 1;
console.log(num++);
var Car = function(wheelCount) {
    this.odometer = 0;
    this.wheels = wheelCount || 4;
    };
Car.prototype.drive = function(miles) {
  this.odometer += miles;
  return this.odometer;
};
var tesla = new Car();

// => true
console.log(Object.getPrototypeOf(tesla) === Car.prototype);

// => true
console.log(tesla.__proto__ === Car.prototype);
var tesla = new Car();

// => 4
console.log(tesla.wheels);
var isetta = new Car(3);

// =>3
console.log(isetta.wheels);
isetta.drive = function(miles) {
  this.odometer -= miles;
  return this.odometer;
};

// => -10
console.log(isetta.drive(10));

// => 10
console.log(tesla.drive(10));

// Changes made to the prototype are propgated throughout the chain.
Car.prototype.drive = function(miles) {
  this.odometer += miles * 2;
  return this.odometer;
};

// However it cannot propogate changes to properties defined inside the constructor.
Car.prototype.odometer = 0;

// => -20 no change because the local function obscures the prototype's new version
console.log(isetta.drive(10));


// => 30
console.log(tesla.drive(10));

var Car = function(wheelCount) {
    this.wheels = wheelCount || 4;
    };
Car.prototype.odometer = 0;
Car.prototype.drive = function(miles) {
  this.odometer += miles;
  return this.odometer;
};
var tesla = new Car();

// assign the odometer a new default value.
Car.prototype.odometer = 200;

// => 210
console.log(tesla.drive(10));

// assign it yet again.
Car.prototype.odometer = 2000;

// This change fails because the drive function set a local variable for odometer as it runs.
// => 220
console.log(tesla.drive(10));
var Car = function() {

    // Instance Property
    this.running = false;

    // Instance Method
    this.start = function() {
      return this.running = true;
    }
    }
    
    
    
var tesla = new Car();

// => false
console.log(tesla.running);

// => true
console.log(tesla.start());

// => "Wed May 15 2013 15:42:24 GMT-0400 (EDT)"
Date()

// => TypeError: object is not a function
Math();
// Zero is returned as specified by the built-in Number object's constructor.
// => 0
var num = Number();

// A new instance of the number object is returned.
// => Number {}
var num = new Number();
var Car = function(wheelCount) {
    this.wheels = wheelCount || 4
    }
    
Car.prototype.odometer = 0;

var tesla = new Car();

// => 4
console.log(tesla.wheels);

// => 0
console.log(tesla.odometer);
var Car = function() {

    // Instance Property
    this.running = false;

    // Instance Method
    this.start = function() {
      return this.running = true;
    }
}

Car.prototype.stop = function() {
  return this.running = false;
}

var tesla = new Car();

// => false
console.log(tesla.running);

// => true
console.log(tesla.start());

// => false
console.log(tesla.stop());
var Cake = function() {};
Cake.isLie = true;
String.reverse = function(s) {
  return s.split("").reverse().join("");
};

// => secret message
console.log(String.reverse("egassem terces"));
