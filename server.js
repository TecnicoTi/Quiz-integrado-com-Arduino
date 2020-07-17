const express = require('express');
const app = express();
const server = require('http').createServer(app);
const {Animation, Board, Servo} = require("johnny-five");
const io = require('socket.io')(server, {
    // origins:'127.0.0.1:*'
});
const LedUm = require('./script/LedUm');
const DesligarLed = require('./script/Desligar');
//const ServoMotor = require('./script/ServoMotor');
const five = require('johnny-five');
const arduino = new five.Board();

// Define o caminho para arquivos estaticos que podem ser acessados pelo usuario
app.use(express.static(__dirname + '/node_modules'));
//Onde fica as pastas js img index da pagina, fora do public não funcion
app.use(express.static('public/'));
io.on('connection', function(client) {
    client.on('correta', function(data) {
        // console.log(data);
        LedUm(data);
    });
    client.on('desligar', function(data) {
        DesligarLed();
    });

});
// Irá iniciar o servido na url: 127.0.0.1:8000
server.listen(8000, function() {
    console.log('Aberto na porta 8000');
    arduino.on('ready', function() {
        console.log('Arduino conectado');

    });
});