var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;

var googlehome = require('google-home-notifier');
var language = 'en'; // if not set 'us' language will be used

googlehome.device('Google Home', language); // Change to your Google Home name
// or if you know your Google Home IP
// googlehome.ip('192.168.1.20', language);







googlehome.notify('Hey Foo', function(res) {
  console.log(res);
});


app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});

//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a user connected');

  // if you get the 'ledON' msg, send an 'H' to the arduino
socket.on('Message1', function() {
    console.log('Message1');
    googlehome.notify('This is Message 1', function(res) {
      console.log(res);
    });
});
socket.on('Message2', function() {
    console.log('Message2');
    googlehome.notify('This is Message 2', function(res) {
      console.log(res);
    });
});
socket.on('Message3', function() {
    console.log('Message3');
    googlehome.notify('This is Message 3', function(res) {
      console.log(res);
    });
});
socket.on('Message4', function() {
    console.log('Message4');
    googlehome.notify('Message 5. Ha just kidding its Message 4', function(res) {
      console.log(res);
    });
});




  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});
//----------------------------------------------------------------------------//
