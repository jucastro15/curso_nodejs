import "dotenv/config.js";
import express  from "express";
import  cors from "cors";
import multer from "multer";

const servidor = express();
servidor.use( express.json() );
servidor.use(cors());

let upLoadPerfil = multer({ dest: './storage/perfil'})
servidor.use('/storage/perfil', express.static('./storage/perfil'));



servidor.get('/helloworld', (req,resp) => {
  
    resp.send({
      mensagem:'Hello world :)'
    });
})

servidor.get('/mensagens/boasvindas', (req,resp) => {
    resp.send({
      mensagem:'Olá, sejam bem-vindos e bem-vindas S2'
    });
})

servidor.get('/v2/mensagens/boasvindas', (req,resp) => {
    resp.send({
      mensagem:'Que bom te ver por aqui :)'
    });
})

servidor.get('/mensagens/ocupado', (req,resp) => {
    resp.send({
      mensagem:'Estou ocupada no momento :('
    });
})


servidor.get('/mensagens/ocupado/recado', (req,resp) => {
    resp.send({
      mensagem:'Estou ocupada no momento deixe su mensagem no email xxxxxx.'
  });
})

servidor.get('/calculadora/soma/:n1/:n2', (req, res) => {

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

  servidor.get('/calculadora/somar2', (req, res) => {
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

  servidor.get('/mensagens/ola', (req, resp) => {
    
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


servidor.post('/media', (req,resp) =>{
   let n1 = req.body.nota1
   let n2 = req.body.nota2
   let n3 = req.body.nota3
   let media = ( n1 +n2+n3)/3
  
   resp.send({
    media:media
  });

});

servidor.post('/dobros', (req,resp) => {
   let nums =req.body.numeros 
   let nums2= []

   for(let i = 0; i < nums.length; i++){
    nums2[i] = nums[i]*2 
   }

   resp.send({
    num:nums,
    dobro:nums2
  })
});

servidor.post('/loja/pedido', (req,resp) =>{
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

 servidor.post('/loja/pedido/completo', (req, resp) => {

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

  })

  servidor.post('/perfil/capa', upLoadPerfil.single('imagem'), (req, resp) => {



    let caminho = req.file.path
    let extencao = req.file.mimetype
    let nome = req.file.originalname
   

    resp.send({
      caminho: caminho,
      extencao: extencao,
      nome:nome,
      
    });
  });



const PORTA = process.env.PORTA
  

servidor.listen(
    PORTA,
    () => console.log(`API subida com sucesso na porta ${PORTA}`));