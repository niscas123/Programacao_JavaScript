const estudantes = [
    {   
        nome: "Nícollas",
        nota: 9
    },
    {
        nome: "José",
        nota: 4
    },
    {
        nome: "Teresa",
        nota: 7
    }
];

function getAprovacaoEstudantes(estudantesLista) {
    return estudantesLista.filter(estudante => estudante.nota >= 7);
}

console.log("Alunos aprovados:");
console.log(getAprovacaoEstudantes(estudantes));

console.log("\nLista de alunos:");
console.log(students);