// Variáveis
/*var nome = "Nícollas Ivanno";
var idade = 22;
alert(nome + " tem " + idade  + " anos de idade");

var frase = "EUA é o melhor time do Mundo";

console.log(frase.replace("EUA", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toLocaleUpperCase());*/

// Array
/*var lista = ["maçã", "pera", "laranja"];
//lista.push("uva"); // Adiciona elemento na lista
//lista.pop(); // Tira um elemento da lista
//lista.reverse() // Reverte a conjunto do array
//lista.length() // Mostra o tamanho da lista
console.log(lista.toString()); // Transforma os elementos em String
console.log(lista.join(" | ")); // Adiciona possíveis saperados da String
//alert(lista)*/

// Dicionário
//var fruta = {nome: "maçã", cor: "vermelho"};
//var frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "pera", cor: "verde"}]; // Lista de dicionários
//console.log(frutas[1].nome, frutas[0].cor);

// Condicionais
/*var idade = prompt("Qual a su15a idade?");

if(idade >= 18) {
    alert("Maior de idade.");
} else {
    alert("Menor de idade.");
};*/

// Laços de Repetições (While)
/*var contador = 0;
while(contador <= 5) {
    console.log(contador);
    //contador = contador + 1; 
    //contador += 1;
    contador++;
};*/

// Laços de Repetições (For)
//var contador = 0;
/*for(contador = 0; contador <= 5; contador++) {
    console.log(contador);
};*/
// Date
/*var d = new Date();
console.log(d.getDate() + " / " + d.getMonth() + " / " + d.getYear());
console.log(d.getHours() + "H " + d.getMinutes() + "M " + d.getSeconds());
console.log(d.getMonth() + " \n" + d.getDate());*/

// Função
/*function soma(numero1, numero2) {
    return numero1 + numero2;
}
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(soma(1, 2));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/
/*var validar = 0;
function validaIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
//console.log(validaIdade(idade));
validaIdade(idade);
console.log(validar);*/

// Manipulando o HTML
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<Strong>Obrigado por clicar!</Strong>"; // Cria uma mensagem no HTML ao ser clicado
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar() {
    window.open("https://github.com/niscas123"); // Abre a página em outra aba
    window.location.href = "https://github.com/niscas123"; // Abre a página na mesma aba
}
function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui!";
}
function load() {
    alert("Página carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value);
}