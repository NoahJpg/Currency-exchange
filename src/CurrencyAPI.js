export default class CurrencyAPI {
  static async getCurrency(currencyAmount) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.MARKETAUX_KEY}/latest/USD`);
      const jsonifiedResponse = await response.json();
      if (response.status !== 200) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}