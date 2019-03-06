//Object properties and methods
//we create an instance of emmiter
//if we require events we can add and use every event that we want
var Emmiter = require('events');

var emtr = new Emmiter();

var eventConfig = require('./config').events;
//adding events
emtr.on(eventConfig.GREET, function(){
    console.log("somewhere, someone said hello");
})

emtr.on(eventConfig.GREET, function(){
    console.log("A greeting occured!");
})

//execute that method
emtr.emit('greet');

//creating an object
var obj = {
    greet: 'hello'
}
//acceding to the object's property by string index
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays

var arr = [];
//adding methods to the array

arr.push(function(){
    console.log('Hello world!');
});

arr.push(function(){
    console.log('Hello world!!');
});

arr.push(function(){
    console.log('Hello world!!!');
});

arr.forEach(function(item){
    item();
})

//magical string
//words that have a significal meaning in our code