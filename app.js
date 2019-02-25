// // function greet() {
// //     console.log("hi");
// // }
// // greet();
// // let greet = () => console.log('hi');
// // greet();
// // function logGreeting(fn) {
// //     fn();
// // }
// // let logGreeting = (fn) => fn();
// // logGreeting(greet);
// greet = () => console.log("hi");
// greet();
// // logGreeting = (fn) => fn();
// let logGreeting=(fn)=>fn();
// logGreeting(greet);
// greetMe = () =>  console.log("hi cesar"),
// // let greetMe = function(){
// //     console.log("hi cesar");
// // }

// greetMe();

// logGreeting(greetMe);

// logGreeting(() => console.log("hi world!"));

var greet = require('./greet');

greet();
