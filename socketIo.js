const express = require('express');
/* express application instance */
const app = express();
/* Initializing HTTP server for socket connection */
const http = require('http').createServer(app);
/* creating a socket.io instance with express server */
const socket = require('socket.io');
const io = socket(http);

io.on('connect', (socket) => {
  /* The unique ID for this Socket - socket.id */
  console.log('socket connection established', socket.id);
  /* Recieves the message sent by the client with event name send-chat-message */
  socket.on('send-chat-message', (message) => {
    /* Logs the clients unique id and the message sent into the console */
    console.log(`message from Client ${socket.id} - ${message}`);
    /* emits the message received, back to the client with the event name chat-message */
    io.emit('chat-message', message);
  });
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname, '/public/index.html');
});

http.listen(3200, () => {
  console.log('Server started at 3200');
});
