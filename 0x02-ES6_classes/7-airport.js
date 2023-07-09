export default class Airport{
    constructor(name, code){
        this._name = this._validateName(name);
        this._code = this._validateCode(code);
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
    get [Symbol.toStringTag]() {
        return `${this._code}`;
    }
}