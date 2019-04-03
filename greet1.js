'use strict';

var EventEmmiter = require('events');
var util = require('util');

class Greeter{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

var greeter1 = new Greeter('john', 'doe');
greeter1.greet();
Greeter.prototype.greet = function(data){
    console.log(`${this.greet} : data`);
    this.emit('greet',data);
}

util.inherits(Greeter, EventEmmiter);