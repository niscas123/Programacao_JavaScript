const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log("symbol1 é igual a symbol2:", symbol1 == symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [nameSymbol1]: "Arthur",
    [nameSymbol2]: "Cavalcanti",
    lastName: "Ramos"
}

console.log(user);

// Symbols criam propriedades que não são enumerados
for(const key in user) {
    if(user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key} ${user[key]}`);
    }
}

console.log("Propriedades do Objeto user:", Object.keys(user));
console.log("Valores das propriedades do Objeto user:", Object.values(user));

// Exibir symbols de um Objeto
console.log("Symbols registrados no Objeto user:", Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do Objeto user
console.log("Todas as propriedades do Objeto user:", Reflect.ownKeys(user));

const directions = {
    UP: Symbol( "UP "),
    DOWN: Symbol( "DOWN" ),
    LEFT: Symbol( "LEFT" ),
    RIGHT: Symbol( "RIGHT" )
};

console.log(directions);