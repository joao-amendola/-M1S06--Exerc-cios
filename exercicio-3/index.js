// Exercício 3

function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cliente.cpf === 11111111111){
            resolve(true);
        }
        else {
            reject(false);
        }
    });
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor) {
            resolve(true);
        }
        else {
            reject(false);
        }
    });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// aprovacaoCadastro
//     .then((resultado) => {
//         console.log(resultado)
//         return aprovacaoValor
//     })
//     .then((resultado) => {
//         console.log(resultado)
//     })
//     .catch((e) => console.log(e))

// continue com o tratamento dos resultados de ambas as promises...

Promise.all([aprovacaoCadastro, aprovacaoValor]).then((resultado) => {
    console.log("Aprovado!")
}).catch((erro) => {
    console.log("Reprovado!")
}).finally(() => {
    console.log("... Fim do processamento")
})