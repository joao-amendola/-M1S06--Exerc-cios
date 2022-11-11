// Exercício 6

const buscaIdade = async (nome) => {
    try {
        const resultado = await fetch(`https://api.agify.io/?country_id=BR&name=${nome}`)
        const data = await resultado.json()
        console.log(`Pessoas com nome "${nome}" no Brasil têm idade média de ${data.age} anos`)
    } catch (error) {
        console.error(error)
    }
}

buscaIdade('João')