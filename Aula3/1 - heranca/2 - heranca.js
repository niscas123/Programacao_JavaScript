/*
function Bicho(qtDePatas) {
    this.qtDePatas = qtDePatas;
}
function Cachorro(morde) {
    Bicho.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log("Au! Au!");
    }
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug); // Cachorro { qtDePatas: 4, morde: false, latir: [Function] }
console.log(pitbull); // Cachorro { qtDePatas: 4, morde: true, latir: [Function] }
*/

function Animal() {

}

Animal.prototype.qtDePatas = 0;
Animal.prototype.movimentar = function() {

}

function Cachorro(morde) {
    this.qtDePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log("Au! Au!");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug.__proto__, "\n",pug);
console.log(pitbull.__proto__, "\n", pitbull);