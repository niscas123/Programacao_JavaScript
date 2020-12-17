// keys
const array = [1, 2, 3, 4];

const arrayIterator = array.keys();

console.log(arrayIterator.next());

console.log(arrayIterator.next());

console.log(arrayIterator.next());

console.log(arrayIterator.next());

console.log("\n");

// values
const arrayValues = array.values();
console.log(arrayValues.next());

console.log(arrayValues.next());

console.log(arrayValues.next());

console.log(arrayValues.next());

console.log("\n")

// entries
const arrayEntries = array.entries();
console.log(arrayEntries.next());

console.log(arrayEntries.next());

console.log(arrayEntries.next());

console.log(arrayEntries.next());

console.log("\n")

// find

const firstGreaterThanTwo = array.find(value => value > 2);

console.log(firstGreaterThanTwo, "\n"); // 3

// find index
const firstIndexGreaterThanTwo = array.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo, "\n"); // 2

// filter
const allValuesGreaterThanTwo = array.filter(value => value > 2);

console.log(allValuesGreaterThanTwo, "\n"); // [ 3, 4 ]

// indexOf
const firstIndexOfGreaterThanTwo = array.indexOf(3);

console.log(firstIndexOfGreaterThanTwo);  // 2

// lastIndexOf
const lastIndexOfGreaterThanTwo = array.lastIndexOf(2);

console.log(lastIndexOfGreaterThanTwo); // 1

// includes
const inclu = [1, 3, 3, 4, 3];

const hasItemOne = inclu.lastIndexOf(1); // true

const hasItemTwo = inclu.lastIndexOf(2); // false

// some
const hasSomeEvenNumber = inclu.some(value => value % 2 === 0); // true
console.log(hasSomeEvenNumber);

// every
const allEvenNumber = inclu.every(value => value % 2 === 0); // false
console.log(allEvenNumber);

//sort
const students = [
    { name: "Nícollas", grade: 8},
    { name: "Arthur", grade: 10},
    { name: "Edwillyans", grade: 7}
];

const study = students.sort((current, next) => current.grade - next.grade);
console.log(study);

// reverse
const reverter = students.reverse();
console.log(reverter);

// join
const number = [1, 2, 3, 4, 5];

console.log(number.join(" - "));

// reduce
console.log(number.reduce((total, value) => total += value, 0));