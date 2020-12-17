class Person {
    #name = "";
    
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
}

const p = new Person("Nícollas");

console.log(p.name);