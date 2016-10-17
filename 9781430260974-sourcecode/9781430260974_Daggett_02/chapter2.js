/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/

// Immediately invoked function expression
;!function() {
  var triumph = false,
      cake = false,
      satisfaction = 0,
      isLie, note;

  // Block used as part of a function expression
  var isLie = function(val) {
        return val === false;
      }

  // Block used as part of a conditional statement
  if (isLie(cake)) {
    triumph = true;
    makeNote('huge success');
    satisfaction += 10;
  }

  // Block used as part of a function declaration

  function makeNote(message) {
    note = message;
  }
}();

// The inline conditional block statement is executed only once per cycle.
if (isLie(cake)) {
  //...
}

function makeNote(message) {
  //...
}

// The function declaration is executed as many times as it is called.
makeNote("Moderate Success");
makeNote("Huge Success");

var object = {
  'foo': 'bar'
},
    num = 1;

// Passed by reference
;!function(obj) {
  obj.foo = 'baz';
}(object);

// => Object {foo: "baz"} 
console.log(object);

// Passed by value;
;!function(num) {
  num = 2;
}(num);

// => 1
console.log(num);
var sum = function() {
    var len = arguments.length,
        total = 0;
    for (var x = 0; x < len; x++) {
      total += arguments[x];
    }
    return total;
    };

// => 6
console.log(sum(1, 2, 3));
var sum = function() {
    var total = 0;
    while (arguments.length > 0) {
      total += arguments.pop();
    }
    return total;
    };

// Uncaught TypeError: Object #<Object> has no method 'pop' 
sum(1, 2, 3);

var join = function(foo = 'foo', baz = (foo === 'foo') ? join(foo + "!") : 'baz') {
      return foo + ":" + baz;
    }

// => hi:there
console.log(join("hi", "there"));

// Use the default parameter when not supplied
// => hi:baz
console.log(join("hi"));

// Use the default parameter when undefined is supplied
// => foo:there
console.log(join(undefined, "there"));

// Use an expression which has access to the current set of arguments
// => foo:foo!:baz
console.log(join('foo'));
var dispatcher = {
  join: function(before, after) {
    return before + ':' + after
  },
  sum: function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    });
  }
};

var proxy = {
  relay: function(method) {
    var args;
    args = Array.prototype.splice.call(arguments, 1);
    return dispatcher[method].apply(dispatcher, args);
  }
};

// => bar:baz
console.log(proxy.relay('join', 'bar', 'baz'));

// => 28
console.log(proxy.relay('sum', 1, 2, 3, 4, 5, 6, 7));
var dispatcher = {
  join: function(before, after) {
    return before + ':' + after
  },
  sum: function(...rest) {
    return rest.reduce(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    });
  }
};

var proxy = {
  relay: function(method, ...goodies) {
    return dispatcher[method].apply(dispatcher, goodies);
  }
};

// => bar:baz
console.log(proxy.relay('join', 'bar', 'baz'));

// => 28
console.log(proxy.relay('sum', 1, 2, 3, 4, 5, 6, 7));
// Function Declaration

function isLie(cake) {
  return cake === true;
}

// Function Expression
var isLie = function(cake) {
      return cake === true;
    }

    // => Hi, I'm a function declaration!
    declaration();

function declaration() {
  console.log("Hi, I'm a function declaration!");
}

// => Uncaught TypeError: undefined is not a function
expression();

var expression = function() {
    console.log("Hi, I'm a function expression!");
    }

function sayHi() {
  console.log("hi");
}

var hi = function sayHi() {
    console.log("hello");
    }

// => "hello"
hi();

// => 'hi'
sayHi();
var sayHo

// => function
console.log(typeof(sayHey))

// => undefined
console.log(typeof(sayHo))

if (true) {
  function sayHey() {
    console.log("hey");
  }

  sayHo = function sayHo() {
    console.log("ho");
  }

} else {
  function sayHey() {
    console.log("no");
  }

  sayHo = function sayHo() {
    console.log("no");
  }

}

// => no
sayHey();

// => ho
sayHo();

var x = 20;

// Functions have their own scope
;!function() {
  var x = "foo";

  // => "foo"
  console.log(x);
}();

// => 20
console.log(x);

for (x = 0; x < 10; x++) {

  // => 0..9
  console.log(x);
}

// => 10
console.log(x);

// Option 1: Use a local free variable to bypass the need to reference this.
var VendingMachine = function() {
    this.stock = ["Sgt. Pepper", "Choke", "Spite"];
    var that = this;
    return {
      dispense: function() {
        if (that.stock.length > 0) {
          return that.stock.pop();
        }
      }
    };
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());

// Option 2: Use a bound function to reference this.
var VendingMachine = function() {
    this.stock = ["Sgt. Pepper", "Choke", "Spite"];
    var dispense = function() {
        if (this.stock.length > 0) {
          return this.stock.pop();
        }
    };
    return {
      dispense: dispense.bind(this)
    };
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());

// Option 3: Use a fat arrow to supply the lexical this.
var VendingMachine = function() {
    this.stock = ["Sgt. Pepper", "Choke", "Spite"];
    return {
      dispense: () => {
        if (this.stock.length > 0) {
          return this.stock.pop();
        }
      }
    };
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());
// function classic
var sum = [1, 2, 3, 4, 5].reduce(function(last, curr) {
  return last + curr;
});

// => 15
console.log(sum);

// now with 100% more fat arrow.
var sum = [1, 2, 3, 4, 5].reduce((last, curr) => last + curr);

// => 15
console.log(sum);
// => 10
[1, 2, 3, 4].reduceRight(function(curr, val) curr + val);
// => 10
[1, 2, 3, 4].reduceRight((curr, val) => curr + val);;

(function() {
  //...
})();

;!function() {
  //...
}();

;-function() {
  //...
}();

;+function() {
  //...
}();

;~function() {
  //...
}();

// Not Recommended
;void function() {
  //...
}();

// Not Recommended
;delete function() {
  //...
}();

var tree = {
  name: 'Users',
  children: [{
    name: 'heavysixer',
    children: [{
      name: 'Applications',
      children: []
    }, {
      name: 'Downloads',
      children: []
    }, {
      name: 'Library',
      children: [{
        name: 'Accounts',
        children: []
      }, {
        name: 'Arduino',
        children: []
      }]
    }]
  }, {
    name: 'root',
    children: []
  }]
};

var walker = function walk(branch, newDepth) {
    var depth = newDepth || 0;
    var len = branch.children.length;
    console.log(depth + ':' + branch.name);
    while (len > 0) {
      len--;
      walker(branch.children[len], depth + 1);
    }
  };

/*
  => 0:Users
  => 1:root
  => 1:heavysixer
  => 2:Library
  => 3:Arduino
  => 3:Accounts
  => 2:Downloads
  => 2:Applications
*/
walker(tree);

// reference the callee object from the arguments object
arguments.callee(branch.children[len], depth + 1);

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles objects with the built-in `forEach`, arrays, and raw objects.
// Delegates to **ECMAScript 5**'s native `forEach` if available.
var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
_.map = _.collect = function(obj, iterator, context) {
  var results = [];
  if (obj == null) return results;
  if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
  each(obj, function(value, index, list) {
    results.push(iterator.call(context, value, index, list));
  });
  return results;
};

// => [2,3,6]
var doubled = _.map([1, 2, 3], function(num) {
  return num * this.multiplier;
}, {
  multiplier: 2
});
var namedFunction = function named() {

    // => function
    console.log(typeof(named));
  }
    
namedFunction();

// => undefined
console.log(typeof(named));

/*
 * It is much harder to debug anonymous function expressions
 * Uncaught boom
 *    - (anonymous function)
 *    - window.onload
 */
;!function() {
  throw ("boom");
}();

/*
 * Naming your function expressions give you a place to start looking when debugging.
 * Uncaught boom
 *    - goBoom
 *    - window.onload
 */
;!function goBoom() {
  throw ("boom")
}();
