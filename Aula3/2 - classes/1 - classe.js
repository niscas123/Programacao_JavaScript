class Animal {
    constructor(qtDePatas) {
        this.qtDePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }

}

const pug = new Cachorro(false);

console.log(pug); // Cachorro { qtDePatas: 4, morde: 4 }

class Bicho {
    constructor() {
        this.qtDePatas = 0;
    }

    movimentar(){

    }
}

class Dog extends Bicho {
    constructor(morde) {
        super();
        this.qtDePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log("Au! Au!");
    }
}

const pastorAlemao = new Dog(true);
const viraLata = new Dog(false);

console.log(pastorAlemao);
console.log(viraLata)

