import express from 'express';

import mensagemController  from "./controller/mensagemController.js";
import calculadoraController  from"./controller/calculadoraController.js";
import exerciciosController from"./controller/exerciciosController.js";
import lojaController from "./controller/lojaController.js";
import usuarioController  from"./controller/usuario.Controller.js";

export default  function AdicionaRotas(servidor){

    //arquivos estaticos
    servidor.use('/storage/perfil', express.static('./storage/perfil'));

    //arquivos controllers
    servidor.use(mensagemController);
    servidor.use(calculadoraController);
    servidor.use(exerciciosController);
    servidor.use(lojaController);
    servidor.use(usuarioController);
    
}