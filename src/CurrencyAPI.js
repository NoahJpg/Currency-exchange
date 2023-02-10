export default class CurrencyAPI {
  static async getCurrency() {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      console.log("response:", JSON.stringify(response, null, 2));
      const jsonifiedResponse = await response.json();
      console.log("response:", JSON.stringify(jsonifiedResponse, null, 2));
      if (response.result === "error") {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}