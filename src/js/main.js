const key = 'rsbBzwFGYKpjujiq0GJWUOBQq01GyifiMH9ORjAj';
const url = 'https://api.nasa.gov/planetary/apod';

axios.get(url+'?api_key='+key).then(function(response) {
    document.documentElement.style.backgroundImage = 'url('+response.data.url+')';
    document.getElementById('heading').textContent = response.data.title;
    document.getElementById('explanation').textContent = response.data.explanation;
});

axios.get('https://api.kraken.com/0/public/Ticker?pair=BTCEUR,ETHEUR').then((res) => {
    let BTC = Number(res.data.result.XXBTZEUR.c[0]).toFixed(0);
    let ETH = Number(res.data.result.XETHZEUR.c[0]).toFixed(0);
    document.getElementById('btc').textContent = '€'+BTC;
    document.getElementById('eth').textContent = '€'+ETH;
});

let date = new Date();

document.getElementById('date').textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
document.getElementById('time').textContent = `${date.getHours()}:${date.getMinutes()+1}`;
