import { horatual } from "./datetime.js"

global.criarErro = function criarErro(err) {

    let obj =
    {
        erro: err.message
    };

    return obj;
}



global.logError = function logError(err) {
    console.log(horatual() + 'ERROR --->' + err.menssage)
}
