export function validarCompleto(req) {
    if (!req.body.parcelas || isNaN(req.body.parcelas)) {
        throw new Error('Parâmetro parcelas inválido');
    }

    if (!req.body.itens) {
        throw new Error('Parâmetro itens incorreto');
    }
}