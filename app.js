'use strict'//Para teber una sintaxis mas estricta

//Declaracion de clase y todas las clases declaradas dentro estan en la cadena de prototipo
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

// Person.prototype.greet = function(){
//     console.log(`Hello, ${this.firstname} ${this.lastname}`);
// }

var John = new Person('john', 'Doe');
John.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

//__proto__  es para ver la cadena de prototipo
console.log(John.__proto__);
console.log(John.__proto__);
console.log(John.__proto__ === jane.__proto__);