export default function initBitcoin() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.innerText = (200 / bitcoin.BRL.sell).toFixed(6);
    }).catch(error => {
        console.log(error);
    })
}