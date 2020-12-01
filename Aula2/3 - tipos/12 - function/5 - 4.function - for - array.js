function ePalindromo(palavra) {
    var palindromo = "";
    for(var i = palavra.length - 1; i >= 0; i--) {
        palindromo += palavra[i];
    }
    if(palavra == palindromo) {
        return "SIM, SOU UM PALÍNDROMO";
    } else {
        return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO";
    }
}
console.log(ePalindromo("OVO"));