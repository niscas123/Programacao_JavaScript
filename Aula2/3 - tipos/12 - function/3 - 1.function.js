function determinarGeracao(anoDeNascimento) {
    var resultado; 
    if(anoDeNascimento <= 1945) {
        resultado = "Geração silenciosa";
    } if(anoDeNascimento > 1945 && anoDeNascimento <= 1964) {
        resultado = "Boomers";
    } if(anoDeNascimento > 1964 && anoDeNascimento <= 1980) {
        resultado = "Geração X";
    } if(anoDeNascimento > 1980 && anoDeNascimento <= 1996) {
        resultado = "Millennials";
    } if(anoDeNascimento > 1996) {
        resultado = "Geração Z";
    }
    return resultado;
}
console.log(determinarGeracao(1945));
console.log(determinarGeracao(1964));
console.log(determinarGeracao(1980));
console.log(determinarGeracao(1996));
console.log(determinarGeracao(1997));