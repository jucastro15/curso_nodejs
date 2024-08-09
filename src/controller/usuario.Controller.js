
import { Router } from "express";
import multer from "multer";


const endpoints = Router();
let upLoadPerfil = multer({ dest: './storage/perfil'})


endpoints.post('/perfil/capa', upLoadPerfil.single('imagem'), (req, resp) => {

    let caminho = req.file.path
    let extencao = req.file.mimetype
    let nome = req.file.originalname
   

    resp.send({
      caminho: caminho,
      extencao: extencao,
      nome:nome,
      
    });
  });



  export default endpoints;