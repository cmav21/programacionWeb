var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

var greet3b = require('./greet3');
//Cuando se crea un instancia de require en diferentes objetos, todos se refieren a la misma instancia
greet3b.greet();
//De esta forma se pueden hacer varias instancias de un objeto
var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();
//revealing object pattern
var greet5 = require('./greet5');
greet5.greet();
