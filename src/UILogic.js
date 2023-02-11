import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './CurrencyAPI';


export function printExchange(response, currencyType, amount) {
  let apiResponse = response.conversion_rates[currencyType];
  let conversion = apiResponse * amount;
  let results = `$${amount} USD = ${conversion} ${currencyType}`;
  document.querySelector('#results').innerText = results; 
}

export function printError(error, currencyType) {
  if (error.result !== "success") {
    document.querySelector('#results').innerText = `There was an error accessing the data for ${currencyType}:`;
  } else
    document.querySelector('#results').innerText = `There was an error accessing the data for `;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener('submit', async function(event) {
    event.preventDefault();
    handlePrintExchange();
    document.querySelector('#currency-amount').value = null;
  });
});

async function handlePrintExchange() {
  let amount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector('#currency-type').value;

  
  let apiResponse = await CurrencyAPI.getCurrency();
  printExchange(apiResponse, currencyType, amount)
}