/*
 This file is not inteded to be run in isolation.
 It comprises all the snippets used throughout the chapter, 
 and is merely included so that the readers will not need to transcribe
 these examples by hand. To run the examples I suggest copying and then pasting the
 relevant code into a console window of your favorite browser.
*/

/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);               // wait for a second
}
int bytesRead = 0;
boolean isPinSet;
byte stored[2];


void setup()
{
  Serial.begin(57600);
}

void loop()
{
  while (Serial.available()) {
    int data = Serial.read();

    stored[bytesRead] = data;
    bytesRead++;

    if (bytesRead == 2) {
      if (isPinSet == false) {
        isPinSet = true;
        pinMode(stored[0], OUTPUT);
      } else {
        digitalWrite(stored[0], stored[1]);
      }
      bytesRead = 0;
    }
  }
}
npm install serialport 
var serial = require("serialport"),
    raddress = /usb|acm|com/i,
    pin = 13;

serial.list(function(err, result) {
  var read = new Buffer(0),
      address, port, bite;

  if (result.length) {
    address = result.filter(function(val) {

      // Match only address that Arduino cares about
      // ttyUSB#, cu.usbmodem#, COM#
      if (raddress.test(val.comName)) {
        return val;
      }
    }).map(function(val) {
      return val.comName;
    })[0];


    port = new serial.SerialPort(address, {
      baudrate: 57600,
      buffersize: 1
    });

    port.on("open", function() {
      var bite;

      function loop() {
        port.write([pin, (bite ^= 0x01)]);
      }

      setInterval(loop, 500);
    });
  } else {
    console.log("No valid port found");
  }
});

/**
 * Sample script to blink LED 13
 */
 
console.log('blink start ...');

var pin = 13;
 
var firmata = require('firmata');
var board = new firmata.Board('/dev/cu.usbmodem1411', function(err) {
  var bite;
  
  board.pinMode(pin, board.MODES.OUTPUT);
 
  function loop() {
    board.digitalWrite([pin, (bite ^= 0x01)]);
  }
 
  setInterval(loop, 500);
}); 
node firmata-blinky.js
npm install johnny-five 
var five = require("johnny-five"),
    board = new five.Board();
 
board.on("ready", function() {
   (new five.Led(13)).strobe();
 
});

var five = require("johnny-five"),
    board = new five.Board();
 
board.on("ready", function() {
  var servo = new five.Servo(10);
 
  this.repl.inject({
    servo: servo
  });
 
  servo.center();
  servo.on("move", function(err, degrees) {
    console.log("move", degrees);
  });
});
