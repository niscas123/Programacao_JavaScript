class Person {
    #name = "";

    constructor(initialName) {
        this.#name = initialName;
    }

    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
}

const p = new Person("Claudia");

console.log(p.getName());
p.setName("Nauan");
console.log(p.getName());