
const obterPrecoBitcoin = async () => {
    const resultado = await fetch('https://api.coincap.io/v2/assets/bitcoin')
    const {data} = await resultado.json() // desestrutura
    console.log(`O preço do Bitcoin ${data.symbol} em dólares hoje é $ ${data.priceUsd}`)
}

obterPrecoBitcoin()