const serverless = require('serverless-http');
const server = require('./src/server');
require('dotenv').config();

const serverInstance = new server();

if (process.env.DEVELOPMENT === "false") {
  serverInstance.execute();
}

module.exports.handler = serverless(serverInstance.app);