import Currency from "./3-currency.js";

export default class Pricing{
    constructor(amount, currency){
        this._amount = this._validateAmount(amount);
        this._currency = this._validatecurrency(currency); 
    }

    //validation for code
    _validateAmount(amount){
        if (typeof amount === 'number'){
            return amount
        } else{
            throw new TypeError('amount must be a number')
        }
    }

    //validation for name
    _validatecurrency(currency){
        if (currency instanceof Currency){
            return currency
        } else{
            throw new TypeError('currency must be a class instance')
        }
    }

     //getters
    get currency(){
        return this._currency;
    }
    get amount(){
        return this._amount;
    }

    //setters
    set currency(value){
        this._currency = this._validatecurrency(value)
    }
    set amount(value){
        this._amount = this._validateAmount(value)
    }

    //public method
    displayFullPrice (){
        return (`${this._amount} ${this._currency._name} (${this._currency._code})`)
    }

    //static method
    static convertPrice(amount, conversionRate ){
        return (this._validateAmount(amount) * this._validateAmount(conversionRate))
    }
}
