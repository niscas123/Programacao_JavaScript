// E = AND lógico (&&)
exp1 && exp2 

var a1 = true  && true; // t  && t retorna true
var a2 = true && false; // t && f retorna false
var a3 = false && true; // f && t retorna false
var a4 = false && false; // f && f retorna false
var a5 = false && (3 == 4); // f && f retorna false
var a6 = "Gato" && "Cão"; // t && t retorna Cão
var a7 = false && "Gato"; // f && t retorna false
var a8 = "Gato" && false; // t && f retorna false


// OU = OR lógico (||)
exp1 || exp2

var b1 = true || true; // t || t retorna true
var b2 = true || false; // t || f retorna true
var b3 = false || true; // f || t retorna true
var b4 = false || false; // f || f retorna false
var b5 = false || (3 == 4); // f || f retorna false
var b6 = "Gato" || "Cão"; // t || t retorna Gato
var b7 = false || "Gato"; // f || t retorna Gato
var b8 = "Cão" || false; // t || f retorna Cão

// NÃO = NOT lógico (!)
!exp1

var c1 = !true // !t retorna false
var c2 = !false // !f retorna true
var c3 = !"Gato" // !t retorna false