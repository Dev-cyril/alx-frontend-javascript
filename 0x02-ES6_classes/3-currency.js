export default class Currency {
  constructor(code, name) {
    this._code = this._validateCode(code);
    this._name = this._validateName(name);
  }

  // Validation for code
  _validateCode(code) {
    if (typeof code === 'string') {
      return code;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  // Validation for name
  _validateName(name) {
    if (typeof name === 'string') {
      return name;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  // Getters
  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }

  // Setters
  set name(value) {
    this._name = this._validateName(value);
  }
  set code(value) {
    this._code = this._validateCode(value);
  }

  // Public method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
