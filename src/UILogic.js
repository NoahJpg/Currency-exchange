import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getCurrencyConverstion } from "./BusinessLogic.js";

/* eslint-disable no-console */
export function printExchange(response, currencyType) {
  let values = response.conversion_rates[currencyType]
  console.log(values)
  let results = `$1.00 = ${values} ${currencyType}`;
  document.querySelector('#results').innerText = results; 
}

// export function printExchangedAmount(dollarAmount, printExchange) {
  
// }

export function printError(error, currencyType) {
  if (error.result !== "success") {
    document.querySelector('#results').innerText = `There was an error accessing the data for ${currencyType}:`;
  } else
    document.querySelector('#results').innerText = `There was an error accessing the data for `;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyAmount = document.querySelector('#currency-type').value;
  document.querySelector('#currency-type').value = null;
  getCurrencyConverstion(currencyAmount);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});