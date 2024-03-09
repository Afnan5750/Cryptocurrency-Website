document.addEventListener("DOMContentLoaded", function () {
    CryptocurrencyPrices();
    setInterval(CryptocurrencyPrices, 15000);
});

function CryptocurrencyPrices() {
    const coins = document.querySelectorAll(".coin");

    coins.forEach(coin => {
        const name = coin.querySelector("p").textContent.toLowerCase();
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`)
            .then(response => response.json())
            .then(data => {
                const price = data[name].usd;
                coin.querySelector("h3").textContent = `$${price.toFixed(2)}`;
            })
            .catch(error => {
                console.log(`Error fetching data for ${name}:`, error);
            });
    });
}
