// var person = {
//     firstname: '',
//     lastname: '',
//     greet: function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

// var john = Object.create(person);
// john.firstname = 'john';
// john.lastname = 'doe';

// console.log(john.greet());

// var jane = Object.create(person);
// jane.firstname = 'jane';
// jane.lastname = 'doe';

// console.log(jane.greet());

var EventEmmiter = require('events');
var util = require('util');

function Greetr(){
    EventEmmiter.call(this);    
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmmiter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' ' + data);
    this.emit('greet',data);
}

var  greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('someone greeted!: ' + data);
});

greeter1.greet('cesar');

var obj = {
    name: 'John Doe',
    greet: function(param){
        console.log(`Hello ${this.name}`);
    }   
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});