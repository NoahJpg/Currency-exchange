import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getCurrencyConverstion } from "./BusinessLogic.js";

  /* eslint-disable no-console */
export function printExchange(response, currencyAmount) {
  let values = response.conversion_rates.JPY;
  let results = `The converstion from ${currencyAmount} of USD to JPY is ${values} JPY`
  document.querySelector('#results').innerText = results; 
}

export function printError(error, currencyType) {
  if (error.result !== "success") {
    document.querySelector('#results').innerText = `There was an error accessing the data for ${currencyType}:`
  } else
  document.querySelector('#results').innerText = `There was an error accessing the data for `
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