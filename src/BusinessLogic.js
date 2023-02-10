import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './CurrencyAPI.js';

export async function getCurrencyConverstion(currencyType) {
  const response = await CurrencyAPI.getCurrency(currencyType);
  printExchange(response, currencyType);
}



// USD
// convert to

// JPY - japanese yen
// AUD - australlian dollar
// EUR - euro
// MXN - Peso
// ETB - ethopian Birr