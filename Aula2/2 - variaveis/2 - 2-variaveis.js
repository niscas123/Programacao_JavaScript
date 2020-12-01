(() => {
    let teste = "Valor função";
    console.log(`Valor dentro da função "${teste}"`);

    if(true) {
        let teste = "Valor if";
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após a execução do if "${teste}"`);
})();