var socket = io();

// on: para escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// on: para escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit: enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});