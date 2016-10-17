/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/
var sum = function (a, b) {
    return a + b;
}, addOne = function (num) {
    return sum(1, num);
};

// => 11
addOne(10);
var person = {};
var bank = {
  funds: 0,
  receiveDepositFrom: function(person) {
    this.funds += person.funds;
    person.funds = 0;
  }
};

// => undefined
console.log(person.funds);
person.funds = (function work() {
  return 100;
})();

// => 100
console.log(person.funds);
bank.receiveDepositFrom(person);

// => 0
console.log(person.funds);
 
person.funds = (function work() {

  // Simulate a long running task.
  var end = Date.now() + 4000;
  while (Date.now() < end){

    //noop
  }
  return 100;
})();

var person = {};
var bank = {
  funds: 0,
  receiveDepositFrom: function(person) {

    // Now NaN because person.funds is undefined.
    this.funds += person.funds;
    person.funds = 0;
  }
};

// => undefined
console.log(person.funds);
(function work(person) {

  // Assumes you have jQuery installed
  $.ajax({
    url: "http://some.webservice.com/work.json",
    context: document.body
  }).done(function() {
    person.funds = 100;
  });
 })(person);

// => undefined
console.log(person.funds);
bank.receiveDepositFrom(person);

// => 0
console.log(person.funds);
 
var person = {};
var bank = {
  funds: 0,
  receiveDepositFrom: function(person) {
    this.funds += person.funds;
    person.funds = 0;
  }
};

// => undefined
console.log(person.funds);

(function work(callback) {
  $.ajax({
    url: "http://some.webservice.com/work.json",
    context: document.body
  }).done(function() {
    callback(100);
  });
})(function(amount) {
  person.funds = amount;

  // => 100
  console.log(person.funds);
  bank.receiveDepositFrom(person);

  // => 0
  console.log(person.funds);
});
login('user','password', function(result) {
  if (result.ok) {
    getProfile(function(result) {
      if (result.ok) {
        updateProfile(result.user, function(result) {
          if (result.ok) {
            callback(user);
          }
        });
      }
    });
  }
}, callback);
// CPS style 
var user;
login('user', 'password', function(result) {
  if (result.ok) {
    user = result.user;
  }
});

// Promise style and assumes login returns a promise object.
var promise = login('user', 'password');

promise.then(function(result) {
  if (result.ok) {
    user = result.user;
  }
});
 
Q = require('q');

// Simulates a long running process
var sleep = function(ms) {
    return function(callback) {
      setTimeout(callback, ms);
  };
};

// Using Continuation Passing Style.
var squareCPS = function(num, callback){
  sleep(1000).call(this, function(){
    callback(num * num);
  });
};

// => 100000000
squareCPS(10, function(num){
  squareCPS(num, function(num){
    squareCPS(num, function(num){
        console.log(num);
    });
  });
});

// Using Promises.
var square = function(num) {
    var later = Q.defer();
    sleep(1000).call(this, function() {
      later.resolve(num * num);
    });
    return later.promise;
};

// => 100000000
square(10)
.then(square)
.then(square)
.then(function(total){
  console.log(total);
});
Q.allSettled([
    square(10),
    square(20),
    square(30)
]).then(function(results){
  results.forEach(function (result) {

    // => 100
    // => 400
    // => 900
    console.log(result.value);
  });
});
var sequence, sq;

sq = function* (initialValue) {
    var current, num, step;
    num = initialValue || 2;
    step = 0;
    while (true) {
        current = num * step++;
        yield current
    }
};

sequence = sq(20);

// => 0
console.log(sequence.next().value);

// => 20
console.log(sequence.next().value);

// => 40
console.log(sequence.next().value);

// => 60
console.log(sequence.next().value);
 
var a, alphabet, sequence;

alphabet = function*() {
  var charCode = 65;
  while (charCode < 91) {
    yield String.fromCharCode(charCode++);
  }
  throw new Error("StopIteration")
};

sequence = alphabet();

a = 0;

while (a < 27) {
  try {

    // => a..z
    console.log(sequence.next().value);
  } catch (e) {

    // => [Error: StopIteration]
    console.log(e);
  }
  a++;
}
var letter, alphabet, sequence;

function* alphabet() {
  var charCode = 65;
  while (charCode < 91) {
    yield String.fromCharCode(charCode++);
  }
};
sequence = alphabet(),
letter = sequence.next();

while (!letter.done) {

    // => A..Z
    console.log(letter.value);
    letter = sequence.next();
}
var toggle = (function*(){
  while(true){
    yield true
    yield false
  }
})();

for(var x = 0; x < 5; x++){

  // => true, false, true, false, true
  console.log(toggle.next().value)
}
function run(generator, callback) {
  // Pass in resume for no-wrap function calls
  var iterator = generator(resume);
  var data = null, yielded = false;

  var next = callback ? nextSafe : nextPlain;
  
  next();
  check();
  
  function nextSafe(item) {
    var n;
    try {
      n = iterator.next(item);
      if (!n.done) {
        if (typeof n.value === "function") n.value(resume());
        yielded = true;
        return;
      }
    }
    catch (err) {
      return callback(err);
    }
    return callback(null, n.value);
  }

  function nextPlain(item) {
    var cont = iterator.next(item).value;
    // Pass in resume to continuables if one was yielded.
    if (typeof cont === "function") cont(resume());
    yielded = true;
  }
  
  function resume() {
    var done = false;
    return function () {
      if (done) return;
      done = true;
      data = arguments;
      check();
    };
  }
  
  function check() {
    while (data && yielded) {
      var err = data[0];
      var item = data[1];
      data = null;
      yielded = false;
      if (err) return iterator.throw(err);
      next(item);
      yielded = true;
    }
  }

} 
function sleep(ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
}

// => Prints "Started", "Almost Done", and "Done" on indvidual lines.
run(function* () {
  console.log("Started");
  yield sleep(1000);
  console.log("Almost Done")
  yield sleep(1000);
  console.log("Done!");
});
function* sub(n) {
  while (n) {
    console.log(n--);
    yield sleep(10);
  }
}

// => Prints "Start", "[10..1]","End" on individual lines.
run(function* () {
  console.log("Start");
  yield* sub(10);
  console.log("End");
});

worker = new Worker("worker.js");
// ping.html
<!DOCTYPE HTML>
<html>
<body>
<script type="text/javascript" charset="utf-8">
addEventListener("DOMContentLoaded", (function() {
  worker = new Worker("pong.js");
  worker.onmessage = function(e) {
    console.log(e.data);
  };
  console.log('ping');
  worker.postMessage();
}), false);
</script>
</body>
</html>

// pong.js
onmessage = function(event) {
  postMessage('pong');
};
// index.html
<html>
<head>
<title>index</title>
</head>
<body>
<script type="text/javascript" charset="utf-8">
addEventListener("DOMContentLoaded", (function() {
  var canvas, ctx, imageData, requestAnimationFrame, worker;

  // get the correct animationFrame handler
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  // add a canvas element and create a rendering context
  canvas = document.createElement("canvas");
  document.getElementsByTagName("body")[0].appendChild(canvas);
  canvas.height = canvas.width = 400;
  ctx = canvas.getContext("2d");
  imageData = ctx.createImageData(canvas.width, canvas.height);

  // create a new web worker instance
  worker = new Worker("worker.js");
  worker.onmessage = function(e) {
    ctx.putImageData(e.data.pixels, 0, 0);

    // once the canvas is ready for another frame request it from the worker
    window.requestAnimationFrame(function() {
      worker.postMessage({
        pixels: ctx.getImageData(0, 0, canvas.width, canvas.height),
        seed: e.data.seed
      });
    });
  };

  // seed the worker process.
  worker.postMessage({
    pixels: ctx.getImageData(0, 0, canvas.width, canvas.height),
    seed: +new Date()
  });
}), false);
</script>
</body>
</html>


// worker.js
setPixel = function() {
  var index;
  index = (x + y * imageData.width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = 255;
};

onmessage = function(event) {
  var b, d, g, height, imageData, pos, r, seed, t, width, x, x2, xoff, y, y2, yoff;
  pos = 0;
  imageData = event.data.pixels;
  seed = event.data.seed;
  width = imageData.width;
  height = imageData.height;
  xoff = width / 2;
  yoff = height / 2;
  y = 0;
  while (y < height) {
    x = 0;
    while (x < width) {
      x2 = x - xoff;
      y2 = y - yoff;
      d = Math.sqrt(x2 * x2 + y2 * y2);
      t = Math.sin(d / 6.0 * (+new Date() - seed) / 5000);
      r = t * 200 + y;
      g = t * 200 - y;
      b = t * 255 - x / height;
      imageData.data[pos++] = Math.max(0, Math.min(255, r));
      imageData.data[pos++] = Math.max(0, Math.min(255, g));
      imageData.data[pos++] = Math.max(0, Math.min(255, b));
      imageData.data[pos++] = 255;
      x++;
    }
    y++;
  }
  postMessage({
    pixels: imageData,
    seed: seed
  });
};
// chat.html
<!DOCTYPE HTML>
<html>
 <head>
  <title>Chat Room</title>
  <script>
  var configure, name, sendMessage, update, updateChannel, updatePrivateChannel, updatePublicChannel, worker;

  configure = function(event) {
    var name;
    name = event.data.envelope.from;
    return document.getElementById("guest_name").textContent += " " + name;
  };

  updatePublicChannel = function(event) {
    return updateChannel(document.getElementById("public_channel"), event);
  };

  updatePrivateChannel = function(event) {
    return updateChannel(document.getElementById("private_channel"), event);
  };

  updateChannel = function(channel, event) {
    var div, from, m, message, n;
    from = event.data.envelope.from;
    message = event.data.envelope.body;
    div = document.createElement("div");
    n = document.createElement("button");
    n.textContent = from;
    n.onclick = function() {
      return worker.port.postMessage({
        action: "msg",
        envelope: {
          from: name,
          to: from,
          body: document.getElementById("message").value
        }
      });
    };
    div.appendChild(n);
    m = document.createElement("span");
    m.textContent = message;
    div.appendChild(m);
    return channel.appendChild(div);
  };

  update = function(event) {
    switch (event.data.action) {
      case "cfg":
        return configure(event);
      case "txt":
        return updatePublicChannel(event);
      case "msg":
        return updatePrivateChannel(event);
    }
  };

  sendMessage = function(message) {
    return worker.port.postMessage({
      action: "txt",
      envelope: {
        from: name,
        body: message
      }
    });
  };

  worker = new SharedWorker("chat_worker.js", "core");

  name = void 0;

  worker.port.addEventListener("message", update, false);

  worker.port.start();

  </script>
 </head>
 <body>
  <h2>Public Chat</h2>
  <h1>Welcome <span id="guest_name"></span></h1>
  <h4>public</h4>
  <div id="public_channel"></div>
  <h4>private</h4>
  <div id="private_channel"></div>
  <form onsubmit="sendMessage(message.value);message.value = ''; return false;">
   <p>
    <input id='message' type="text" name="message" size="50">
    <button>Post</button>
   </p>
  </form>
 </body>
</html>

// chat_worker.js
/*
  Simplified example from:
  http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html
*/
var getMessage, getNextName, nextName, onconnect, viewers;

getNextName = function() {
  nextName++;
  return "Guest" + nextName;
};

getMessage = function(event) {
  var channel, from, to, viewer, _results;
  switch (event.data.action) {
  case "txt":
    _results = [];
    for (viewer in viewers) {
      _results.push(viewers[viewer].port.postMessage({
        action: "txt",
        envelope: {
          from: event.target.session.name,
          body: event.data.envelope.body
        }
      }));
    }
    return _results;
    break;
  case "msg":
    from = event.target.session;
    to = viewers[event.data.envelope.to];
    if (to) {
      channel = new MessageChannel();
      from.port.postMessage({
        action: "msg",
        envelope: {
          to: to.name,
          from: from.name,
          body: "private message sent to: " + event.data.envelope.to
        }
      }, [channel.port1]);
      return to.port.postMessage({
        action: "msg",
        envelope: {
          to: from.name,
          from: to.name,
          body: "private message: " + event.data.envelope.body
        }
      }, [channel.port2]);
    }
  }
};

nextName = 0;

viewers = {};

onconnect = function(event) {
  var name;
  name = getNextName();
  event.ports[0].session = {
    port: event.ports[0],
    name: name
  };
  viewers[name] = event.ports[0].session;
  event.ports[0].postMessage({
    action: "cfg",
    envelope: {
      from: name,
      body: "connected"
    }
  });
  return event.ports[0].onmessage = getMessage;
};
var blobTheBuilder, winUrl, worker;

winUrl = window.URL || window.webkitURL;

blobTheBuilder = new Blob(["self.onmessage=function(e){postMessage(Math.round(Math.sqrt(e.data)))}"]);

worker = new Worker(winUrl.createObjectURL(blobTheBuilder));

worker.onmessage = function (e) {
    return console.log(e.data);
};

// Find the closest square root of a number
// => 6
worker.postMessage(42); 
