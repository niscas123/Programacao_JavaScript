const array = [1, 2, 3, 4, 5];

console.log(array.map(value => value * 2)); // [ 2, 4, 6, 8, 10 ]

const frutas = ["melancia", "acerola", "uva", "laranja"];

console.log(frutas.map((fruta, index) => `${index}: ${fruta}`));