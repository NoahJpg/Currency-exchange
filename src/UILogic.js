import { getCurrencyConverstion } from "./BusinessLogic.js";

export function printExchange(apiResponse, currencyType) {
  let values = response.conversion_rates.YEN
  document.querySelector('#exchange').innerText = (`${currencyType}: `);

}