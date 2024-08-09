import { Router } from "express";

const endpoints = Router();
 endpoints.post('/loja/pedido', (req,resp) =>{
    let total = req.body.total
    let parcelas = req.body.parcelas
    let cupom = req.query.cupom

    if(parcelas > 1){
   
        total += total * 0.05
 
    }
    if(cupom === 'QUERO100'){
        total-=100

    }

    let vlp = total/parcelas

    resp.status(202).send({
      entrada:{
      cupom:cupom,
      parcelas:parcelas
      },
      vlparcela:vlp,
      total:total
    })
 
 });

 endpoints.post('/loja/pedido/completo', (req, resp) => {

   try {

    if(!req.body.parcelas || isNaN(req.body.parcelas)) throw new Error(`Parametro invalido`)
    

    if(!req.body.itens) throw new Error (`Erro no `)

     let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;
  
    let total = 0;
    for (let item of itens) {
      total += item.preco;
    }
    if (parcelas > 1) {
      total += total * 0.05; 

    }if (cupom === 'quero100') {
      total -= 100;

    }
 

    let descricoes = itens.map(item => item.descricao);

    
    resp.send({
        entrada: {
            descricoes: descricoes, 
            cupom: cupom 
        },
        total: total
    });
  }

    catch(err){
      resp.status(400).send({
        erro: err.mensage
    });
   
    }

  });

  export default endpoints;