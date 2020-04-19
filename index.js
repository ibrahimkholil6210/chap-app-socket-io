const express = require('express');
const app = express();
const socket = require('socket.io');


const server = app.listen(8081);
console.log("Listening to port 8081");

app.use(express.static('public'));


const io = socket(server);

io.on('connection',(socket)=>{
    console.log('Connection established '+ socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
});