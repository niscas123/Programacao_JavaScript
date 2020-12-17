function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

const p = new Person("Nícollas");

console.log(p.name);