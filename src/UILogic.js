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

export function printError(error) {
  document.querySelector('#results').innerText = `Error: ${error}`;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener('submit', async (event) => {
    event.preventDefault();
    handlePrintExchange();
    document.querySelector('#currency-amount').value = null;
  });
});

async function handlePrintExchange() {
  let amount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector('#currency-type').value;

  
  if ((currencyType === 'select') || (!amount)) {
    document.querySelector('#results').innerText = "Please fill out both fields.";
    return;
  }
  // add try catch
  try {
    let apiResponse = await CurrencyAPI.getCurrency();
    printExchange(apiResponse, currencyType, amount);
  } catch (error) {
    printError(error)
  }
}