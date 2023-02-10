import CurrencyAPI from './CurrencyAPI.js';
import { printExchange, printError } from './UILogic.js';

export async function getCurrencyConversion(currencyAmount) {
  const response = await CurrencyAPI.getCurrency(currencyAmount);
  if (response.result === "success") {
    printExchange(response, currencyAmount);
  } else {
    printError(response, currencyAmount);
  }
}