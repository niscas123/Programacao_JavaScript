const usuario = {
    nome: "Nícollas",
    ultimoNome: "Silva"
};

function getUsuarioNomeCompleto(usuario) {
    return {
        ...usuario, 
        nomeCompleto: `${usuario.nome} ${usuario.ultimoNome}`
    }
}

const usuarioNomeCompleto = getUsuarioNomeCompleto(usuario);

console.log(usuarioNomeCompleto, usuario);