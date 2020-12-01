function buscaNumeroPrimos(n) {
    var numerosPrimos = [2, 3];
    for(var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
        var quantidadeDivisores = 0;

        for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
            if(numeroAtual % numeroMenor == 0) {
                quantidadeDivisores++;
            }
        }

        if(quantidadeDivisores == 0) {
            numerosPrimos.push(numeroAtual);
        }
    }

    return numerosPrimos;
}
console.log(buscaNumeroPrimos(21));