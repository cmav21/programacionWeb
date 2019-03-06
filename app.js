//Object properties and methods
var Emmiter = require('./emmiter')

var emtr = new Emmiter();

emtr.on('greet', function(){
    console.log("somewhere, someone said hello");
})

emtr.on('greet', function(){
    console.log("A greeting occured!");
})

var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays

var arr = [];

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