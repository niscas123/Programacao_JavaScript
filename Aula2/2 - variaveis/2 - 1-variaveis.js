var teste = "exemplo função";

(() => {
    console.log(`Valor dentro da função "${teste}"`);

    if(true) {
        var teste = "exemplo if";
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após a execução do if "${teste}"`);
})();