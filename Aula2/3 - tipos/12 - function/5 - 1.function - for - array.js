function multiplicaPorDois(numeros) {
    /*
     * Complete a função multiplicando todos os elementos
     * do array `numeros` por dois e retornando um array
     * com esses resultados
     */
     var resultados = [];
     for(var i = 0; i < numeros.length; i++) {
        var multiplicadoPorDois = numeros[i] * 2;
        resultados.push(multiplicadoPorDois);
     }
     return resultados;
}