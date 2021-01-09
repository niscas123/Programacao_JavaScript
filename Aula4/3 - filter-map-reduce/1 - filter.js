const animals = [
    { 
        name: "Rex", 
        type: "Dog",
        age: 10
    },
    { 
        name: "Chaninho",
        type: "Cat",
        age: 2
    }, 
    {
        name: "Gulp",
        type: "Fish",
        age: 1
    }
];
const newAnimals = animals.filter((animal) => {
    return animal.age < 5;
});

const eMenorQueCinco = (numero) => {
    return numero < 5;
}
const newAnimalsreduzida = animals.filter(({age}) => eMenorQueCinco(age));

console.log(animals, "\n");
console.log(newAnimals, "\n");
console.log(newAnimalsreduzida);