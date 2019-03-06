//Object properties and methods
//we create an instance of emmiter
var Emmiter = require('./emmiter')

var emtr = new Emmiter();
//adding events
emtr.on('greet', function(){
    console.log("somewhere, someone said hello");
})

emtr.on('greet', function(){
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