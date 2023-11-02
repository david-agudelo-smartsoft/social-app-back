const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/config');
const usersRouter = require('./routes/user.routes');
const publicationRouter = require('./routes/publication.routes');
const uploadRouter = require('./routes/upload.routes');
const { Server } = require('socket.io'); // Socket.io

class ServerApp {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors({ origin: 'http://localhost:4200' }));
        this.app.use('/api/users', usersRouter);
        this.app.use('/api/publications', publicationRouter);
        this.port = process.env.PORT;
        // base de datos
        connectDB();
        this.server = http.createServer(this.app);

        // Socket.io 
        this.io = new Server(this.server, {
            cors: {
                origin: 'http://localhost:4200',
            },
        });

        this.io.on('connection', (socket) => {
            console.log('Nuevo Usuario Conectado');

            socket.on('sendMessage', (message) => {
                console.log('Enviando un mensaje');
                socket.broadcast.emit('receiveMessage', message);
            });
        });
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    execute() {
        this.middlewares();
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerApp;
