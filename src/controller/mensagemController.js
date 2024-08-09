
import { Router } from "express";
const endpoints = Router();

endpoints.get('/helloworld', (req,resp) => {
  
    resp.send({
      mensagem:'Hello world :)'
    });
})

endpoints.get('/mensagens/boasvindas', (req,resp) => {
    resp.send({
      mensagem:'Olá, sejam bem-vindos e bem-vindas S2'
    });
})

endpoints.get('/v2/mensagens/boasvindas', (req,resp) => {
    resp.send({
      mensagem:'Que bom te ver por aqui :)'
    });
})

endpoints.get('/mensagens/ocupado', (req,resp) => {
    resp.send({
      mensagem:'Estou ocupada no momento :('
    });
})


endpoints.get('/mensagens/ocupado/recado', (req,resp) => {
    resp.send({
      mensagem:'Estou ocupada no momento deixe su mensagem no email xxxxxx.'
  });
})



endpoints.get('/mensagens/ola', (req, resp) => {
    
  if (!req.query.nome) {
      resp.status(400).send({
          erro: 'O parâmetro NOME é obrigatório'
      });
      return;
  }

  
  let pessoa = req.query.nome || ':)';

  resp.send({
      mensagem: 'Olá ' + pessoa
  });
});

export default endpoints;
