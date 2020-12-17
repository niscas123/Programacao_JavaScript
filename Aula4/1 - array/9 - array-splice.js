const array = [1, 2, 3, 4, 5, 6, 7];

array.splice(2); // remove 3, 4, 5, 6, 7

console.log(array); // fica 1, 2

array.splice(0, 0, "first"); // []

console.log(array); // [ 'first', 1, 2]

const frutas = ["melancia", "banana"];

/*frutas.splice(1, 0, "acerola");

console.log(frutas);*/

