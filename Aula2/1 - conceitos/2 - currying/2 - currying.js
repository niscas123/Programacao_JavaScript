function soma(a) {
    return function(b) {
        return a + b;
    }
}
// Evita repetir a função de soma com dois parametros, colocando apenas um valor fixo para somar outro valor qualquer
const soma2 = soma(2); // Atribui o valor fixo da funcao soma = 2

console.log(soma2(1)); // retorna a soma da function com o soma(a), soma2(b) | 2 + 1
console.log(soma2(2)); // retorna a soma da function com o soma(a), soma2(b) | 2 + 2
console.log(soma2(3)); // retorna a soma da function com o soma(a), soma2(b) | 2 + 3
console.log(soma2(4)); // retorna a soma da function com o soma(a), soma2(b) | 2 + 4
console.log(soma2(5)); // retorna a soma da function com o soma(a), soma2(b) | 2 + 5