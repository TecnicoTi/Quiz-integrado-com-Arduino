module.exports = function (led) {
    // COLOCAR CÓDIGO ABAIXO ENTRE AS CHAVES
    // console.log(led);
    const five = require('johnny-five');
    led = new five.Led(led);
    led.toggle();
};