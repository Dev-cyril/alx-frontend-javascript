import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  // Validation for amount
  _validateAmount(amount) {
    if (typeof amount === 'number') {
      return amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Validation for currency
  _validateCurrency(currency) {
    if (currency instanceof Currency) {
      return currency;
    } else {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
  }

  // Getters
  get currency() {
    return this._currency;
  }
  get amount() {
    return this._amount;
  }

  // Setters
  set currency(value) {
    this._currency = this._validateCurrency(value);
  }
  set amount(value) {
    this._amount = this._validateAmount(value);
  }

  // Public method
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return this._validateAmount(amount) * this._validateAmount(conversionRate);
  }
}
