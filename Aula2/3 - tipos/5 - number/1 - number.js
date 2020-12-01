const myNumber = 12.4032;

// * Tranformar número para string de
const numberAsString = myNumber.toString();
console.log("Número transformado em string:", numberAsString, typeof numberAsString);

// * Retorna número com um número de casa decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas cassa decimais:", fixedTwoDecimals);

// * Transforma string em float
console.log("\nString transformada em float:", parseFloat("13.22"));

// * Transforma uma string em int
console.log("\nString transformada em int:", parseInt("13.20"))