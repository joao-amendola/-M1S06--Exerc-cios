//Exercício 5

function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

async function processar() {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente)
}

processar();