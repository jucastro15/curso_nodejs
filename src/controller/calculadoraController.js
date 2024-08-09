import { Router } from "express";
const endpoints = Router();


endpoints.get('/calculadora/soma/:n1/:n2', (req, res) => {

    if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
      res.status(400).send('Os parâmetros devem ser números');
      return;
    }
      const n1 = Number(req.params.n1);
      const n2 = Number(req.params.n2);
      const soma = n1 + n2;
      res.send({
        soma:soma
      });
    });
  
    endpoints.get('/calculadora/somar2', (req, res) => {
      const n1 = Number(req.query.n1);
      const n2 = Number(req.query.n2);
      const soma = n1 + n2;
      res.send({
        entrada:{
          n1:n1,
          n2:n2
        },
        soma:soma
      });
    });

    export default endpoints;
  