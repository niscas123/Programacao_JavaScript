function fn() {
    return "Code here";
}

const arrowFn = () => "Code here";
const arrowFn2 = () => {
    // Mais de uma expressão
    return "Code here";
}

// Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnresult = fnParam => console.log(fnParam());

logFnresult(fn);

// Receber e retornar Funções
/*const controlFnExec = () => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função
handleFnExecution(); // Não executará a função  */

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}