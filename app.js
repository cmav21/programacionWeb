// function Person(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// var john = new Person('john', 'doe');
//primitives
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

function changeObject(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}
//passs by reference
var c = {};//empty object
c.prop1 = {};
changeObject(c);
console.log(c);


