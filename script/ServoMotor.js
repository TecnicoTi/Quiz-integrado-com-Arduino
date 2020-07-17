module.exports = function (servo) {
    // COLOCAR CÓDIGO ABAIXO ENTRE AS CHAVES
    // console.log(led);
    const five = require('johnny-five');
    servos = new five.Servos(servoPins);
    servos.sweep();
};


