const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/config');
const usersRouter = require('./routes/user.routes');

class server {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.use('/api/users', usersRouter);
        this.port = process.env.PORT;
        // connect to database
        connectDB();
        this.server = http.createServer(this.app);
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    execute(){
        this.middlewares();
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = server;