module.exports = function () {
    // COLOCAR CÓDIGO ABAIXO ENTRE AS CHAVES
    // console.log(led);
    const five = require('johnny-five');
    for (let i = 2; i <= 7; i++) {
        let led = new five.Led(i);
        if (led.off()) console.log('LED ' + i + ' Desligando');
    }
};