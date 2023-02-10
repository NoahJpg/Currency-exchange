import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyAPI from './CurrencyAPI.js';
import printError from './UILogic.js'

export async function getCurrencyConverstion(currencyType) {
  const response = await CurrencyAPI.getCurrency(currencyType);
  if (response.result === "success") {
    printExchange(response, currencyType);
  } else {
    printError(response, currencyType)
  }
}


// USD
// convert to

// JPY - japanese yen
// AUD - australlian dollar
// EUR - euro
// MXN - Peso
// ETB - ethopian Birr