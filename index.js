'use strict';

const server = require('./src/server');
require ('dotenv').config ();

const port = process.env.PORT || 7000;

server.start (port);
