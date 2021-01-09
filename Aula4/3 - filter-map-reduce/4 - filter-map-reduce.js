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
        weight: 0.01
    },
    {
        type: "Horse",
        name: "Pé de Pano",
        age: 1,
        weight: 0.01
    }
];
// Encadeando funções
const totalWeightDogs = animals
.filter((animal) => {
    return animal.type === "Dog";
}, 0)
.reduce((total, animal) => {
    return total + animal.weight;
}, 0);
console.log(totalWeightDogs);

// 