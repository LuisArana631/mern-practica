import Server from './models/server';
import dotenv = require('dotenv');
dotenv.config();

const server = new Server();

server.listen();
