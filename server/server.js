const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // Hacer pública la carpeta 'public'

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server); //exportamos el io

require('./sockets/socket'); //importamos el socket.js


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});