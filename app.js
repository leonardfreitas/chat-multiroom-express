// import config server
var app = require('./config/server');

// set server listening port
const port = 5000

var server = app.listen(port, () => {
  console.log('Server ON\n see in: http://localhost:'+port)
})

var io = require('socket.io').listen(server);

app.set('io', io);

// create connection by Websocket
io.on('connection', (socket) => {

  console.log('USUÁRIO CONECTADO!');

  socket.on('msgToServer', (data) => {
    socket.emit('msgToClient', {nickname: data.nickname, msg: data.msg});
    socket.broadcast.emit('msgToClient', {nickname: data.nickname, msg: data.msg});

    //participantes
    if(data.nickname_atualizado == '0') {
      socket.emit('peoplesToClient', {nickname: data.nickname});
      socket.broadcast.emit('peoplesToClient', {nickname: data.nickname});
    }

    socket.join(data.nickname);
    socket.in('leofreitas').emit('new_msg', {msg: 'HELLO LEONARDO'});

  })

});
