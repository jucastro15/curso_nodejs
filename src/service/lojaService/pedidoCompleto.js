export function calcularTotal(parcelas, itens, cupom){
    let total = 0;
    for (let item of itens) {
      total += item.preco;
    }
    if (parcelas > 1) {
      total += total * 0.05; 

    }if (cupom === 'quero100') {
      total -= 100;

    }
 

    return total;
}

export function valorParcela(total,parcelas){
    let vlp = total/parcelas
    return vlp
}