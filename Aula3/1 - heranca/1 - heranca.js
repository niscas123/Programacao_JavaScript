const myText = String("Hello World");

console.log(myText.__proto__.split);

const myText2 = String("Hello World"); // [Function: split]

console.log(myText2.__proto__.split === String.prototype.split); // true

console.log(myText2.constructor === String); // true

function Animal() {

}
console.log(Animal.constructor); // [Function: function]

/*function Bicho() {
    this.quantidadeDePatas = 4;
}

const cachorro = new Bicho();

console.log(cachorro instanceof Bicho);
console.log(cachorro instanceof Function);
console.log(`Cachorro: ${cachorro.quantidadeDePatas} patas`);
*/