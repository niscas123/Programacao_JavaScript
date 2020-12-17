/*
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a 
quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, 
seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, 
apresente o número e o salário do colaborador, com duas casas decimais.
*/
let limit = parseInt(gets()); // 3
for (let i = 0; i < limit; i++) {
    let line = gets().split(" "); // 3 -2
    let X = parseInt(line[0]); // -8 0
    let Y = parseInt(line[1]); // 0 8
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}