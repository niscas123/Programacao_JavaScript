const animals = [
    {
        type: "Dog",
        name: "Bolinha",
        age: 15,
        weight: 30
    },
    {
        type: "Cat",
        name: "Samadov",
        age: 6,
        weight: 2
    },
    {
        type: "Dog",
        name: "Rex",
        age: 4,
        weight: 5
    },
    {
        type: "Cat",
        name: "Bucite",
        age: 2,
        weight: 1
    },
    {
        type: "Fish",
        name: "Gulp",
        age: 1,
        wight: 0.01
    },
    {
        type: "Horse",
        name: "Pé de Pano",
        age: 1,
        weight: 0.01
    }
];
// A palavra reservada Map retorna um novo array com a mesma quantidade de elementos que o array inicial

const animalName = animals.map((animal) => {
    return animal.name;
});
const mostrarName = (nome) => {
    return nome;
}
const animalNameReduzido = animals.map(({name}) => mostrarName(name));

console.log(animalName, "\n");
console.log(animalNameReduzido);

// A palavrareservada forEach não retorna um novo array com a mesma quantidade de elementos

const forEachAnimalName = [];

animals.forEach((animal) => {
    forEachAnimalName.push(animal.name);
});
console.log("\n",forEachAnimalName);