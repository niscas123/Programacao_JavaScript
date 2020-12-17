// in
somethins in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false
"cedro" in arvores // retorna false (você deve especificar o número do índice)
                    // não o valor do índice
"length" in arvores // retorna true (length é uma propriedade de Array)

// Objetos pré-definidos
"PI" in Math; // retorna true
var minhaString = new String("coral");
"length" in minhaString; // retorna true

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Civic", ano: "2020"};
"marca" in meuCarro; // retorna true
"modelo" in meuCarro; // retorna true

// instaceof
objecto instanceof tipoObjeto
var dia = new Date(2020, 12, 13);
if(dia instanceof Date) {

}