//const nome = "Arthur";

// Não pode alterar o valor
//nome = "Arthur";

/*const usuario = {
    nome = "Arthur"
};*/

// Se for um objeto é possível trocar as propriedades
//usuario.nome = "Nome qualquer";

// Não pode fazer o objeto apontar para outro lugar
/*usuario = {
    nome = "Arthur"
};*/

const pessoa = ["Arthur", "Nícollas", "Jennifer"];

// Pode adicionar novos itens
pessoa.push("Carlos");
// ["Arthur", "Nícollas", "Jennifer", "Carlos"];

// Pode remover algum item da lista
pessoa.shift();
// ["Nícollas", "Jennifer", "Carlos"];

// Pode alterar diretamento
pessoa[1] = "João";
// ["Nícollas", "João", "Carlos"];
console.log("\nArray após as alterações: ", pessoa);