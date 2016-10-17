// foo.js
onmessage = function(event) {
  "use strict"
  event = event
  if(event){
    return {"success" : postMessage('pong'), "success" : "ok"}
  }
};

// too tighly coupled
var word = library.shelves[0].books[0].pages[0].words[10]; 

// loosely coupled
var shelf = library.getShelfAt(0);
var book = shelf.getBookAt(0);
var page = book.getPageAt(0);
var word = page.getWordAt(10);
var race = function () {
    var totalLaps = 10;
    var currentLap = 0;
    var driver1 = "Bob";
    var driver2 = "Bill";
    var car1 = {
        driver: driver1,
        fuel: 100,
        maxMph: 100,
        miles: 0,
        tires: 4
    };
    var car2 = {
        driver: driver2,
        fuel: 100,
        maxMph: 100,
        miles: 0,
        tires: 4
    };
    var cars = [car1, car2];
    while (currentLap < totalLaps) {
        currentLap++;
        cars.forEach(function (car) {
            car.miles += Math.floor(Math.random() * car.maxMph) + 1;
        });
    }
    if (car1.miles > car2.miles) {
        console.log(car1.driver + " wins!");
    } else {
        console.log(car2.driver + " wins!");
    }
}

// => (Bob or Bill) wins!
race();
var addCar = function (driver) {
    return {
        driver: driver,
        fuel: 100,
        maxMph: 100,
        miles: 0,
        tires: 4
    };
};

var race = function (cars) {
    var totalLaps = 10;
    var currentLap = 0;
    while (currentLap < totalLaps) {
        currentLap++;
        cars.forEach(function (car) {
            car.miles += Math.floor(Math.random() * car.maxMph) + 1;
        });
    }
    cars.sort(function (a, b) {
        return a.miles > b.miles ? -1 : 1;
    });
    console.log(cars[0].driver + " wins!");
};

// => (Bob or Bill) wins!
race([addCar('Bob'), addCar('Bill')]);
var detectCollision = function (x1, x2, y1, y2, xx1, xx2, yy1, yy2) {
    // more code
}
 
// Restructure the function to accept logically organized objects. 
// rect1 == { x1:0, x2:0, y1:0, y2:0 }
var detectCollision = function (rect1, rect2) {
    // more code
}
// Nesting depth of three
var isRGBA = function (color) {
    if (color != 'red') {
        if (color != 'blue') {
            if (color != 'green') {
                if(color != 'alpha'){
                  return false;
                }
            }
        }
    }
    return true;
};
 
// Nesting depth of three
var isRGBA = function (color) {
    if (color != 'red' && color != 'blue' && color != 'green' && color != 'alpha') {
        return false;
    }
    return true;
};
           v(G) = e - n + 2p
var route;

// score = 1
route = function() {

  // score = 2
  if (request && request.controller) {
    switch (true) {

      // score = 3
    case request.controller === "home":

      // score = 4
      if (request.action) {

        // score = 5
        if (request.action === "search") {
          return goTo("/#home/search");

          // score = 6
        } else if (request.action === "tour") {
          return goTo("/#home/tour");
        } else {
          return goTo("/#home/index");
        }
      }
      break;

    // score = 7
    case request.controller === "users":

      // score = 8
      if (request.action && request.action === "show") {
        return goTo("/#users/show" + request.id);
      } else {
        return goTo("/#users/index");
      }
    }
  } else {
    return goTo("/#error/404");
  }
};

// Cyclomatic score: 2
if(true){
  console.log('true');
}

// Cyclomatic score: 2
if([+[]]+[] == +false){
    console.log('surprise also true!');
}

var equalize;
equalize = function(a, b) {

  // NP[(if)] = NP[(if-range)] + NP[(else-range)] + NP[(expr)]
  //            1              + 1                + 0
  // NPATH Score = 2
  if (a < b) {

    // NP[while] = NP[(while-range)] + NP[(expr)] + 1
    //             1                 + 0          + 1
    // NPATH Score = 2
    while (a <= b) {
      a++;
      console.log("a: " + a + " b: " + b);
    }
  } else {

    // NP[while] = NP[(while-range)] + NP[(expr)] + 1
    //             1                 + 0          + 1
    // NPATH Score = 2
    while (b <= a) {
      b++;
      console.log("a: " + a + " b: " + b);
    }
  }
  console.log("now everyone is equal");
};

// Total NPATH Score: 2 * 2 * 2 = 8
equalize(10, 9);
var x = 5 + 4; 

// Syntax tree of: var x = 5 + 4;
{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "x"
                    },
                    "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                        }
                    }
                }
            ],
            "kind": "var"
        }
    ]
}
n1 = 2
n2 = 3
N1 = 2
N2 = 3
var N = N1 + N2;
var n = n1 + n2;

// => 11.60964047443681
var V = N * (Math.log(n) / Math.log(2));

var L = (V1 * V);
var D = (n1 / 2) * (N2 / n2);
var E = V * D;
var T = E / 18;
var B =  V/E1;
npm install -g complexity-report 
cr ./node_modules/complexity-report/src/cli.js 
  Maintainability index: 125.84886810899188
  Aggregate cyclomatic complexity: 32
  Mean parameter count: 0.9615384615384616

  Function: parseCommandLine
    Line No.: 27
    Physical SLOC: 103
    Logical SLOC: 19
    Parameter count: 0
    Cyclomatic complexity: 7
    Halstead difficulty: 11.428571428571427
    Halstead volume: 1289.3654689326472
    Halstead effort: 14735.605359230252

  Function: expectFiles
    Line No.: 131
    Physical SLOC: 5
    Logical SLOC: 2
    Parameter count: 2
    Cyclomatic complexity: 2
    Halstead difficulty: 3
    Halstead volume: 30
    Halstead effort: 90

  // report continues
