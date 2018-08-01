/*
client.js

Author: Nikolas Martelaro (nmartelaro@gmail.com)

Purpose: This run the interactivity and communication for the web app. This file
is served to the users web browser and executes on the browser.

Usage: This file is called automatically when the webpage is served.
*/

// WebSocket connection setup
var socket = io();

// send out LedOn message over socket
function Message1() {
  socket.emit('Message1');
}

// send out ledOFF message over socket
function Message2() {
  socket.emit('Message2');
}

function Message3() {
  socket.emit('Message3');
}

// send out ledOFF message over socket
function Message4() {
  socket.emit('Message4');
}
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {

});
