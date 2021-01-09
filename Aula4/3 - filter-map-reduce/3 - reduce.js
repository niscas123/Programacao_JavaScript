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
//                        valor acumulado, animal
const totalWeight = animals.reduce((total, animal) => {
    //console.log(`ANIMAL: ${animals.name} \n=PESO: ${totalWeight}`);
    return total + animal.weight;
}, 0);

console.log(`PESO TOTAL DOS ANIMAIS: ${totalWeight.toFixed(2)}`);

// retornar com duas somatórias
const totalWeight2 = animals.reduce((total, animal) => {
    // console.log(total);
    return {
        totalAge: total.totalAge + animal.age,
        totalWeight: total.totalWeight + animal.weight
    }
}, { totalAge: 0, totalWeight: 0 });

console.log("\nMOSTRANDO SOMATÓRIA DA IDADE E DO PESO DO ARRAY\n",totalWeight2);

// somar só o peso dos cachorros
const dogWeight = animals.reduce((total, animal) => {
    if(animal.type !== "Dog") {
        return total;
    } else {
        return total + animal.weight;
    }
}, 0);
console.log("\nAPENAS O PESO TOTAL DOS CACHORROS:",dogWeight);