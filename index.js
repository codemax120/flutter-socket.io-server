const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
require('dotenv').config();

// App de express 
const app = express();


// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// path publico
const publicPath = path.resolve( __dirname , 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (error) => {
    if(error){
        throw new Error(error);
    }
    console.log('!!!!Servidor corriendo en puerto 3000!!!!' , process.env.PORT);
});