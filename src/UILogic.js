import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './CurrencyAPI';

/* eslint-disable no-console */
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
  document.querySelector("form").addEventListener('submit', async (event) => {
    event.preventDefault();
    handleFormSubmission();
  });
});

async function handleFormSubmission() {
  let amount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector('#currency-type').value;

  if (currencyType === 'select') {
    document.querySelector('#results').innerText = "Please select a currency type.";
    return;
  }
  if (!amount) {
    document.querySelector('#results').innerText = "Please enter a valid dollar amount.";
    return;
  }

  let apiResponse = await CurrencyAPI.getCurrency();
  printExchange(apiResponse, currencyType, amount);
}