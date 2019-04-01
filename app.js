    
// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     greet: () => console.log(`Hello ${person.firstname} ${person.lastname}`)
//     // greet: function(){
//     //     console.log("Hello, " + this.firstname + ' ' + this.lastname);
//     // }
// };

// person.greet();

// console.log(person['firstname']);

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

// Person.prototype.greet = () => console.log(`Hello! ${Person.firstname} ${Person.lastname}`);

Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + ' ' + this.lastname);
}

var John = new Person('john', 'Doe');
John.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(John.__proto__)