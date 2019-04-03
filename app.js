'use strict';

var EventEmmiter = require('events');
var util = require('util');

class Greeter extends EventEmmiter{
    constructor(firstname, lastname){
        super();//call super constructor
        // this.firstname = firstname;
        // this.lastname = lastname;
        this.greeting = 'Hello world';
    }

    greet(data){
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
    
    // greet(){
    //     console.log(`Hello ${this.firstname} ${this.lastname}`);
    // }
}

var greeter1 = new Greeter('john', 'doe');
greeter1.greet('tony');

util.inherits(Greeter, EventEmmiter);