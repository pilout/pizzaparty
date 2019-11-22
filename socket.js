let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function (socket) {
console.log("New connection");

  socket.on('disconnect', function () {
   
  });

  socket.on('message', function (message) {
    console.log("rcv from " + socket.client.id);
    io.emit('message', message);
  });

});



app.use(function (req, res, next) {
  res.send('Bonjour bienvenue sur pizzaParty.');
  next();
});

http.listen(4000, function () {
  console.log('It\'s works');
});