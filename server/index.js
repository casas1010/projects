// Main starting point of the application!
const express = require('express');  // required keyword = import statement
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express(); // (2) create a instance of express
const router = require('./router');
const mongoose = require('mongoose');

// // DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// // App SetUp
// // (3.3)  app.use is to register them as middleware in express
app.use(morgan('combined')); //(4) any incoming request is going to passed to morgan and
// //(4.1) morgan: is a logging framework!
app.use(bodyParser.json({type: '*/*'})); // (5) it will also be passed to bodyParser
router(app);

// Server SetUp
const port = process.env.PORT || 3090; // (1) find a port for server to run on on local machine
const server = http.createServer(app) // (3) http= native node library.   create a http server that know how to receive request, if a request comes in send it ot 3090
server.listen(port); //(3.1)
console.log('server listening on:', port) // (3.2)


//