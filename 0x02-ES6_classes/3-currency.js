export default class Currency{
    constructor(code, name){
        this._code = this._validateCode(code);
        this._name = this._validateName(name);
    }

    //validation for code
    _validateCode(code){
        if (typeof code === 'string'){
            return code
        } else{
            throw new TypeError('code must be a string')
        }
    }

    //validation for name
    _validateName(name){
        if (typeof name === 'string'){
            return name
        } else{
            throw new TypeError('name must be a string')
        }
    }

    //getters
    get name(){
        return this._name;
    }
    get code(){
        return this._code;
    }

    //setters
    set name(value){
        this._name = this._validateName(value)
    }
    set code(value){
        this._code = this._validateCode(value)
    }

    //public method
    displayFullCurrency (){
        return (`${this._name} (${this._code})`)
    }
}