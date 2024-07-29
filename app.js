import express  from "express";

const servidor = express();



servidor.get('/helloworld', (req,resp) => {
    resp.send('Hello World :)');
})

servidor.get('/mensagens/boasvindas', (req,resp) => {
    resp.send('Olá, sejam bem-vindos e bem-vindas S2');
})

servidor.get('/v2/mensagens/boasvindas', (req,resp) => {
    resp.send('Que bom te ver por aqui :)');
})

servidor.get('/mensagens/ocupado', (req,resp) => {
    resp.send('Estou ocupada no momento :(');
})


servidor.get('/mensagens/ocupado/recado', (req,resp) => {
    resp.send('Estou ocupada no momento deixe su mensagem no email xxxxxx.');
})


servidor.listen(
    5001, 
    () => console.log('API subida com sucesso na porta 5001'));