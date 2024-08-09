import "dotenv/config.js";
import express  from "express";
import  cors from "cors";
import AdicionaRotas from "./rotas.js";

const servidor = express();
servidor.use( express.json() );
servidor.use(cors());

//add rotas

AdicionaRotas(servidor)

const PORTA = process.env.PORTA
  

servidor.listen(
    PORTA,
    () => console.log(`API subida com sucesso na porta ${PORTA}`));