/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/

// => "1"
var a = (1).toString(); 
console.log(a);

// => "1"
var a = 1 + ""; 
console.log(a);


// => '0'
var s = ''+0; 
console.log(s);

// => 10
console.log(+'10'); 

// => 1373558473636
console.log(+new Date()); 


// => Thu Jul 11 2013 11:01:13 GMT-0500 (CDT)
console.log(new Date() + ''); 
var Money = function (val, sym) {
    this.currencySymbol = sym;
    this.cents = val;
};

var dollar = new Money(100, '$');

// Not helpful
// => NaN
console.log(+dollar);

// Not helpful
// => Total: [object Object]
console.log("Total: " + dollar);

Money.prototype.toString = function () {
    return this.currencySymbol + (this.cents / 100).toFixed(2);
};

Money.prototype.valueOf = function () {
    return this.cents;
};

// Helpful!
// => 100
console.log(+dollar);

// Wait what?! I wanted $1.00
// => 100
console.log(dollar + '');

// Now I am totally confused!
// => $1.00
console.log([dollar] + '');
 
var ToPrimitive;

ToPrimitive = function (obj) {
    var funct, functions, val, _i, _len;
    functions = ["valueOf", "toString"];
    if (typeof obj === "object") {
        if (obj instanceof Date) {
            functions = ["toString", "valueOf"];
        }
        for (_i = 0, _len = functions.length; _i < _len; _i++) {
            funct = functions[_i];
            if (typeof obj[funct] === "function") {
                val = obj[funct]();
                if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
                    return val;
                }
            }
        }
        throw new Error("DefaultValue is ambigious.");
    }
    return obj;
};

// => 1 (as string)
console.log(ToPrimitive([1]));

// => Thu Jul 11 2013 15:55:11 GMT-0500 (CDT) 
console.log(ToPrimitive(new Date()));
// => object
console.log(typeof [1].valueOf());

// => string
console.log(typeof [1].toString())
var noConversions = [{
    toString: undefined
}];

// => Uncaught TypeError: Cannot convert object to primitive value 
console.log(noConversions + '');
 

// => true
console.log([1] == 1);

// => true
console.log([1] == "1");

// => true
console.log([{
    toString: function () {
        return 1;
    }
}] == "1");

// => false
console.log([1] === 1);

// => false
console.log([1] === "1");

// => false
console.log([{
    toString: function () {
        return 1;
    }
}] === "1");
 
// => '10'
++[[]][+[]]+[+[]]
 
// => [Array[0]]
[[]] 

// An array which contains a single value, a coersedcoerced zero thanks to the unary operation.
// => [0]
[+[]] 

// A second array also containing a coersedcoerced zero.
// => [0]
[+[]] 
// => 1
++[[]]['0'] 
// => '10'
1 + ['0'] 

var car = {
    hasWheels: function () {
        return true;
    },
    engineRunning: function () {
        return true;
    },
    wheelsTurning: function () {
        return true;
    }

};

if (car.inMotion = car.hasWheels() && car.engineRunning() && car.wheelsTurning()) {
    console.log('vrrrrooooommmm');
}
var car = {
    hasWheels: function () {
        return true;

    },
    engineRunning: function () {
        return true;
    },
    wheelsTurning: function () {
        return true;
    }

};

if (car.inMotion = car.hasWheels() && car.engineRunning() && car.wheelsTurning()) {
    // make vrrrooommmm noise with your mouth
}
var Car = function(){
    var args = Array.prototype.slice.call(arguments);

    this.name = args[0] || 'tesla'
    this.mpg = args[1] || 100
    this.mph = args[2] || 80
    
    // => Volt
    console.log(this.name);
    
    // => 90
    console.log(this.mpg);
    
    // => 80
    console.log(this.mph);
}

new Car('Volt',90); 
// number is coerced to a Boolean false
// NOT inverts it to true
// => true
console.log(!0);

// number is coerced to a Boolean true
// NOT inverts it to false
// => false
console.log(!1);

// number is coerced to a Boolean true
// NOT inverts it to false
// => false
console.log(!-1);

// string is coerced to a Boolean truthy *something*
// NOT inverts it to false
// => false
console.log(!'0');

// string is coerced to a Boolean truthy *something*
// NOT inverts it to false
// => false
console.log(!'1');

// this is coerced to a Boolean falsey *nothing*
// NOT inverts it to true
// => true
console.log(!undefined);

// this is coerced to a Boolean truthy *something*
// NOT inverts it to true
// => false
console.log(!this);

// unary operator coerces empty array into zero
// zero is coerced into Boolean false
// NOT inverts it to true
// => true
console.log(!+[]);

// inner NOT coerces the empty array to false
// false is not a valid array index so undefined is returned
// undefined is coerced into Boolean false
// NOT inverts it to true
// => true
console.log(![][![]]);
var user = {
    isAdmin: function () {
        return !!this.admin;
    }
};

// undefined this.admin is coerced to false
// then inverted to true
// then inverted again to false
// => false
console.log(user.isAdmin());

user.admin = true;

// this.admin is true without coercion
// inverted to false
// inverted back to true
// => true
console.log(user.isAdmin());

user.admin = false;

// => false
console.log(user.isAdmin());
// Uncaught SyntaxError: Unexpected token (
function(){console.log('foo');}();

// => foo
!function(){console.log('foo');}();
 
// my favorite hex color
var color = 0xC0FFEE;

// Red
// => 192
console.log((color>>16) & 0xFF);

// Green
// => 255
console.log((color>>8) & 0xFF);

// Blue
// => 238
console.log(color & 0xFF);

var GradientFactory = (function () {
    var _beginColor = {
        red: 0,
        green: 0,
        blue: 0
    };
    var _endColor = {
        red: 255,
        green: 255,
        blue: 255
    };
    var _colorStops = 24;
    var _colors = [];
    var _colorKeys = ['red', 'green', 'blue'];
    var _rgbToHex = function (r, g, b) {
        return '#' + _byteToHex(r) + _byteToHex(g) + _byteToHex(b);
    };
    var _byteToHex = function (n) {
        var hexVals = "0123456789ABCDEF";
        return String(hexVals.substr((n >> 4) & 0x0F, 1)) + hexVals.substr(n & 0x0F, 1);
    };
    var _parseColor = function (color) {
        if ((color).toString() === "[object Object]") {
            return color;
        } else {
            color = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
            return {
                red: parseInt((color).substring(0, 2), 16),
                green: parseInt((color).substring(2, 4), 16),
                blue: parseInt((color).substring(4, 6), 16)
            };
        }
    };
    var _generate = function (opts) {
        var _colors = [];
        var options = opts || {};
        var diff = {
            red: 0,
            green: 0,
            blue: 0
        };
        var len = _colorKeys.length;
        var pOffset = 0;
        if (typeof (options.from) !== 'undefined') {
            _beginColor = _parseColor(options.from);
        }
        if (typeof (options.to) !== 'undefined') {
            _endColor = _parseColor(options.to);
        }
        if (typeof (options.stops) !== 'undefined') {
            _colorStops = options.stops;
        }
        _colorStops = Math.max(1, _colorStops - 1);
        for (var x = 0; x < _colorStops; x++) {
            pOffset = parseFloat(x, 10) / _colorStops;
            for (var y = 0; y < len; y++) {
                diff[_colorKeys[y]] = _endColor[_colorKeys[y]] - _beginColor[_colorKeys[y]];
                diff[_colorKeys[y]] = (diff[_colorKeys[y]] * pOffset) + _beginColor[_colorKeys[y]];

            }
            _colors.push(_rgbToHex(diff.red, diff.green, diff.blue));
        }
        _colors.push(_rgbToHex(_endColor.red, _endColor.green, _endColor.blue));
        return _colors;
    };
    return {
        generate: _generate
    };
}).call(this);

// From hex to hex
// => ["#000000", "#262626", "#4C4C4C", "#727272", "#999999"] 
console.log(GradientFactory.generate({
    from: '#000000',
    to: '#999999',
    stops: 5
}));

// From color object to hex
// => ["#C0FFEE", "#CFFFF2", "#DFFFF6", "#EFFFFA", "#FFFFFF"] 
console.log(GradientFactory.generate({
    from: {
        red: 192,
        green: 255,
        blue: 238
    },
    to: {
        red: 255,
        green: 255,
        blue: 255
    },
    stops: 5
})); 
// => 30
var x = (30.9 | 0);
console.log(x);
var x = (30.9|0)  
var signsMatch = function (x, y) {
    return !((x ^ y) < 0);
};

// => false
console.log(signsMatch(10, -10));

// => true
console.log(signsMatch(0, 0));

// => true
console.log(signsMatch(0, -0));

// => true
console.log(signsMatch(-10, -10));

// => true
console.log(signsMatch(1, 1e0));

// => false
console.log(signsMatch(-1, 1e0));
 
var light = {
    on: 1,
    toggle: function () {
        return this.on ^= 1;
    }
};

// => 0
console.log(light.toggle());

// => 1
console.log(light.toggle());

// => 0
console.log(light.toggle()); 
// => 9
~-10

// => 11
-~10

// => 18
2*~-10
var num = "100.7"

// => true
console.log(parseInt(num,10) === ~~num);
var sign = function(x) {
    return (x >> 31) | ((-x) >>> 31);
};

// => -1
console.log(sign(-100));

// => 0
console.log(sign(0));

// => 1
console.log(sign(100));

// => 1
console.log(100 ? 100 < 0 ? -1 : 1 : 0); 

// => -1
console.log(-200 >> 31);

// => -1
console.log(-100 >> 31);

// => 0
console.log(0 >> 31);

// => 0
console.log(100 >> 31);

// => 0
console.log(200 >> 31); 

// => 1
console.log(-200 >>> 31);

// => 1
console.log(-100 >>> 31);

// => 0
console.log(0 >>> 31);

// => 0
console.log(100 >>> 31);

// => 0
console.log(200 >>> 31);
 
// => -1
console.log(-200 >> 31 | 200 >>> 31);

// => -1
console.log(-100 >> 31 | 100 >>> 31);

// => 0
console.log(0 >> 31 | 0 >>> 31);

// => 1
console.log(100 >> 31 | -100 >>> 31);

// => 1
console.log(200 >> 31 | -200 >>> 31);

// => foo
""["sub"]["constructor"]("console.log('foo')")()  

// comparing against octals
// => false
1 + 064 == 65

// => false
064 > 60

// comparing against scientific notation

// => false
3000000000 > 4e9
var \u1000 = {\u1001: function () {
        return 'Unicode';
    }
};
// => 'Unicode'
console.log(\u1000.\u1001());

// => 'secret'
console.log((![]+[])[+[[!+[]+!+[]+!+[]]]]+(!![]+[])[+[[!+[]+!+[]+!+[]]]]+([][(![]+[])[+[[+[]]]]+([][[]]+[])[+[[!+[]+!+[]+!+[]+!+[]+!+[]]]]+(![]+[])[+[[!+[]+!+[]]]]+(!![]+[])[+[[+[]]]]+(!![]+[])[+[[!+[]+!+[]+!+[]]]]+(!![]+[])[+[[+!+[]]]]]+[])[+[[!+[]+!+[]+!+[]]]]+(!![]+[])[+[[+!+[]]]]+(!![]+[])[+[[!+[]+!+[]+!+[]]]]+(!![]+[])[+[[+[]]]])

// => [3]
[!+[]+!+[]+!+[]]

// => true
+[[!+[]+!+[]+!+[]]] == [3] 

// => falsetrue
!+[] 

// => 's'
("false")[3]
 
// => true
"s" == (![]+[])[+[[!+[]+!+[]+!+[]]]] 

// => true
'(' == ([][(![]+[])[+[[+[]]]]+([][[]]+[])[+[[!+[]+!+[]+!+[]+!+[]+!+[]]]]+(![]+[])[+[[!+[]+!+[]]]]+(!![]+[])[+[[+[]]]]+(!![]+[])[+[[!+[]+!+[]+!+[]]]]+(!![]+[])[+[[+!+[]]]]]+[])[+[[+!+[]]]+[[!+[]+!+[]+!+[]+!+[]+!+[]]]] 
