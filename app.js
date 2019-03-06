//Object properties and methods
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