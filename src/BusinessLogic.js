import CurrencyAPI from './CurrencyAPI.js';
import { printExchange, printError } from './UILogic.js';

export async function getCurrencyConversion(currencyType, amount) {
  try {
    const response = await CurrencyAPI.getCurrency();
    if (!response.conversion_rates[currencyType]) {
      printError(`Error: The currency "${currencyType}" is not supported.`);
      return;
    }
    printExchange(response, currencyType, amount);
    return;
  } catch (error) {
    printError(error.message);
    return;
  }
}

