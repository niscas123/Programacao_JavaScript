/*
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o 
valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência 
mostre o valor lido e a relação de notas necessárias.

! Entrada
Você receberá um valor inteiro N (0 < N < 1000000).
*/

let quantia = 189;
let notas = [100, 50, 20, 10, 5, 2, 1];
let contandoNotas = [0, 0, 0, 0, 0, 0, 0];

let resto = quantia;

while(resto >= 1) {
  nota = notas.findIndex(value => value <= resto);
  contandoNotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];

}

console.log(quantia);
console.log(contandoNotas[0] + " nota(s) de R$ 100,00");
console.log(contandoNotas[1] + " nota(s) de R$ 50,00");
console.log(contandoNotas[2] + " nota(s) de R$ 20,00");
console.log(contandoNotas[3] + " nota(s) de R$ 10,00");
console.log(contandoNotas[4] + " nota(s) de R$ 5,00");
console.log(contandoNotas[5] + " nota(s) de R$ 2,00");
console.log(contandoNotas[6] + " nota(s) de R$ 1,00");