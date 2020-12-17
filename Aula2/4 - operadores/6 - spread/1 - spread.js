// Spread ...
var partes = ["ombro", "joelho"];
var musica = ["cabeça", ...partes, "e", "pé"];
// vai ficar assim com o Spread
// var musica = ["cabeça", "ombro", "joelhos", "e", "pé"]

function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);