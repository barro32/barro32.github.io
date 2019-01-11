const key = 'rsbBzwFGYKpjujiq0GJWUOBQq01GyifiMH9ORjAj'
const nasaUrl = 'https://api.nasa.gov/planetary/apod'
const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=BTCEUR,ETHEUR'
const pairs = 'BTCEUR,ETHEUR'

fetch(`${nasaUrl}?api_key=${key}`).then(res => res.json()).then(data => {
    console.log(data)
    document.documentElement.style.backgroundImage = `url(${data.nasaUrl})`
    document.getElementById('heading').textContent = data.title
    document.getElementById('explanation').textContent = data.explanation
})

fetch(`${krakenUrl}?pair=${pairs}`).then(res => res.json()).then(data => {
    const BTC = Number(data.result.XXBTZEUR.c[0]).toFixed(0)
    const ETH = Number(data.result.XETHZEUR.c[0]).toFixed(0)
    document.getElementById('btc').textContent = `€${BTC}`
    document.getElementById('eth').textContent = `€${ETH}`
})
