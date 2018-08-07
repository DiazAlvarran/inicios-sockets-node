const { io } = require('../server');

io.on('connection', (client) => { // Al hacer conexión

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicaión',
        admin: {
            nombre: 'Jorge',
            email: 'jorge.diaz25@unmsm.edu.pe'
        }
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*  if (data.usuario) {
             callback({
                 resp: 'Todo salió BIEN!!!'
             });
         } else {
             callback({
                 resp: 'Todo salió MALL!!!'
             });
         } */

    });

});