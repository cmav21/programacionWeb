//Se importa unicamente el nombre del constructor sin hacer la instancia
function Greetr(){
    this.greeting = 'Hello World';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;