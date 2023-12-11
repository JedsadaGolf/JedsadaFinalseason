// Function to display cryptocurrency prices
function displayPrices(rates) {
  const currencies = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];
  const pricesHtml = `
    <br>
    <ul class='list-group list-group-numbered'>${currencies.map(currency => `<li class='list-group-item'>${currency} : ${rates[currency] || 'N/A'}</li>`).join('')}</ul>
`;
  document.getElementById('prices').innerHTML = pricesHtml;
}
// Function to handle fetch errors

// Function to display the last update time
function displayLastUpdateTime() {
  const updateTimeDiv = document.getElementById('lastUpdateTime');
  const currentTime = new Date().toLocaleTimeString();

  updateTimeDiv.innerHTML = `<label>Last Update Time: ${currentTime}</label>`;
}
// Initial fetch and display
fetchPrices();
// Set interval to fetch and update prices every 30 seconds
setInterval(fetchPrices, 1000);

// Function to fetch cryptocurrency prices from the Coinbase API
async function fetchPrices() {
  try {
    const response = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USDT');
    const data = await response.json();

    // Display prices and last update time
    displayPrices(data.data.rates);
    displayLastUpdateTime();
  } catch (error) {
    handleFetchError(error);
  }
}