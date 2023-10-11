// //service chat
// const express = require('express');
// const http = require('http'); 
// const app = express();
// const server = http.createServer(app); 
// const io = require('socket.io')(server, {
//   cors: {
//     origin: true,
//     credentials: true,
//     methods: ["GET", "POST"] 
//   }
// });

// io.on('connection', (socket) => {
//   console.log('Nuevo Usuario Conectado');

//   socket.on("sendMessage", (messageInfo) => {
//     console.log("Enviando un mensaje");
//     socket.emit("receiveMessage", messageInfo);
//   });
  
// });

// server.listen(3000, () => { 
//   console.log('Escuchando en puerto 3000');
// });