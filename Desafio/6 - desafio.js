/*
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) 
e o total de combustível consumido (em litros).

! Entrada
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y q
ue representa o total de combustível consumido, com um dígito após o ponto decimal
*/
let X = gets();
let Y = gets();

let media = X / Y;
let mediaFinal = media.toFixed(3);
console.log(`${mediaFinal} km/l`);