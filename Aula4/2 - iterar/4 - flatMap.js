const array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value * 2])); // [ 2, 4, 6, 8, 10 ]

console.log(array.flatMap(value => [[value * 2]])); // [ [ 2 ], [ 4 ], [ 6 ], [ 8 ], [ 10 ] ]