export default class CurrencyAPI {
  static async getCurrency(baseCurrency = 'USD') {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      if (!jsonifiedResponse.conversion_rates[baseCurrency]) {
        throw new Error(`Currency ${baseCurrency} does not exist.`);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
} 