
const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);

const person = ["Cris"];

person.push("James", "Jenny");
person.push("John");

console.log(person);

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));