function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person("Nícollas");

console.log(p);
console.log(p.getName());
p.setName("Davi");
console.log(p.getName());