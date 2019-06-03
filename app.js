//Inicializa express
const mongoose = require('mongoose');
var express = require('express');
var app = express();
app.use(express.json());

//Quiere decir que port va a ser igual al valor del puerto de la variable de entorno, en caso contrario
//inicia en el puerto 3000
var port = process.env.PORT || 4000;

//environments variables: global variables specific to the environment(server) our code is living in

//http method: specific the type of action the request wishes to make
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:Camv1998&@ds019756.mlab.com:19756/nosqltest', {useNewUrlParser: true});
    
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
  });
let Person = mongoose.model('Person', personSchema);

app.get('/', (req, res)=>{
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});
//Ejecutar un callback en una ruta determinada dependiendo del metodo http y recibiendo un parametro
app.get('/person/:id', (req, res)=>{
    res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});
//Ejecutar un callback en una ruta determinada dependiendo del metodo http devuelve un objeto
app.get('/api', (req, res)=>{
    res.json({firstname: 'john', lastname:'Doe'});
});

app.post('/api', (req, res)=>{

    let person = Person({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address
    });

    person.save((err) => {
        if(err) throw err;

        res.json(person);
    });
});
//Metodo para inicializar la aplicacion en un puerto determinado
app.listen(port);
