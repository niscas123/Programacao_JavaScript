const array = [1, 2, [3, 4]];

console.log(array.flat()); // [ 1, 2, 3, 4 ] 

const idades = [20, 34, [25, 60, [70, 40]]];

console.log(idades.flat(2)); // [ 20, 34, 25, 60, 70, 40 ]