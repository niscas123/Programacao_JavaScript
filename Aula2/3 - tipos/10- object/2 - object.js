const user = {
    name: "Arthur",
    lastName: "Cavalcanti"
}

// Recupera as chaves do Objeto
console.log("Propriedades do objeto user:", Object.keys(user));

// Recupera os valores das chaves do Objeto
console.log("\nValores das propriedades do valor Objeto user:", Object.values(user));

// Retorna um array de arrays contendo [nome_propriedade, valor_propriedade]
console.log("\nLista de propriedades e valores:", Object.entries(user));

// Mergear propriedas de Objetos
Object.assign(user, {fullName: "Arthur Cavalcanti Ramos"});

console.log("\nAdiciona a propriedade fullName no Objeto user", user);
console.log("\nRetorna um objeto mergeando dois ou mais objetos", Object.assign({}, user, {age: 10}));

// Previne todas as alterações em um Objeto
const newObject = { foo: "bar" };
// 
Object.freeze(newObject);

newObject.foo = "changes";
//delete newObject.foo;
newObject.bar = "foo";

console.log("\nVariável newObject após as alterações:", newObject);

// Permite apenas a alteração  de propriedades existentes em um Objeto
const person = { name: "Arthur" };
Object.seal(person);

person.name = "Arthur Cavalcanti";
//delete person.name;
person.age = 10;

console.log("\nVariável person  após as alterações:", person);