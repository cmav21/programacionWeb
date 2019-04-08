var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //request tiene una propiedad url que es la ruta ingresada
    if(req.url === '/'){
        //formato del response que sera devuelto, en este caso devuelve un html
        res.writeHead(200, {'Content-Type': 'text/html'});
        //Se esta leyendo el archivo html y convertido al formato uft8
        var html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
        //Se sustituye el valor de la parte Message del html por la palabra hola
        html = html.replace('{Message}', 'hola');
        //Se envia el response
        res.end(html);
    }
    else if(req.url === '/api'){
        //Esta cabecera devuelve un json
        res.writeHead(200, {'Content-Type': 'application/json'});
        //Declaracion del objeto
        var obj = {
            firstname: "John",
            lastname: "Doe"
        };
        //Se convierte al formato json con stringify y se regresa como response
        res.end(JSON.stringify(obj));
    }
    else {
        //En caso de que la ruta no sea alguna de las anteriores se regresa un error 404
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');