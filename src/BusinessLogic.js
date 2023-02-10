import CurrencyAPI from './CurrencyAPI.js';
import { printExchange, printError } from './UILogic.js';

export async function getCurrencyConverstion(currencyAmount) {
  const response = await CurrencyAPI.getCurrency(currencyAmount);
  if (response.result === "success") {
    printExchange(response, currencyAmount);
  } else {
    printError(response, currencyAmount)
  }
}


// USD
// convert to

// JPY - japanese yen
// AUD - australlian dollar
// EUR - euro
// MXN - Peso
// ETB - ethopian Birr