import { Router } from "express"
import { calcularTotal } from "../service/lojaService/pedidoCompleto.js";
import { valorParcela } from "../service/lojaService/pedidoCompleto.js";
import { validarCompleto } from "../validation/loja/completo.js";


const endpoints = Router();
endpoints.post('/loja/pedido', (req, resp) => {
  let total = req.body.total
  let parcelas = req.body.parcelas
  let cupom = req.query.cupom

  if (parcelas > 1) {

    total += total * 0.05

  }
  if (cupom === 'QUERO100') {
    total -= 100

  }

  let vlp = total / parcelas

  resp.status(202).send({
    entrada: {
      cupom: cupom,
      parcelas: parcelas
    },
    vlparcela: vlp,
    total: total
  })

});

endpoints.post('/loja/pedido/completo', (req, resp) => {

  try {

    validarCompleto(req)

    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;
    

    let descricoes = itens.map(item => item.desc);

  
    let total = calcularTotal(parcelas, itens, cupom)

    let vlp = valorParcela(total, parcelas)

    resp.send({
      produto: {
        descricoes: descricoes,
        preco: itens.map(item => item.preco)
      },
      total: total,
      vlp: vlp
    });
  }

    catch(err){
      resp.status(400).send(criarErro(err));
   
    }

});

export default endpoints;