let user = {
    name: "Guilherme"
};
console.log(user);
// * Alterando a propriedade de um objeto
user.name = "Fulano";
user["name"] = "Cicrano";

console.log(user);

const prop = "name";
user[prop] = "Beltrano";

console.log(user);

// * Criando uma propriedade
user.lastName = "Silva Costa";

console.log(user);

// * Deletando uma propriedade
delete user.name; // remove o último nome chamado pela propriedade user

console.log(user);