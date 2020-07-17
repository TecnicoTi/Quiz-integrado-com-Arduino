var http = require('http').createServer(servidor);
var fs = require('fs');
var five = require('johnny-five');
var arduino = new five.Board();
var led0, led1, led2, led3;

arduino.on('ready', function(){
  console.log("Arduino Pronto");

  led0 = new five.Led(2);
  led1 = new five.Led(3);
  led2 = new five.Led(4);
  led3 = new five.Led(5);
});

function servidor(req, res){
  var url = req.url;
  if(url == '/'){
    res.writeHead(200);
    res.end(fs.readFileSync('index.html'));
  }else if(url == '/led0'){
    res.writeHead(302, {'Location': '/'});
    res.end();
    led0.toggle();
  }else if(url == '/led1'){
    res.writeHead(302, {'Location': '/'});
    res.end();
    led1.toggle();
  }else if(url == '/led2'){
    res.writeHead(302, {'Location': '/'});
    res.end();
    led2.toggle();
  }else if(url == '/led3'){
    res.writeHead(302, {'Location': '/'});
    res.end();
    led3.toggle();
  }else{
    res.writeHead(200);
    res.end("<h1>Erro 404</h1>");
  }
};

http.listen(3000, function(){
  console.log("Servidor On-line");
});