const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.use(bodyParser.json());

const mensagens = [{
  "id":1,
  "Titulo": "Criar relatório",
  "Data:": "01/10/2023",
  "DataLembrete": "25/10/2023",
  "Descricao": "Lembrete do dia 01"
}
  ,
{
  "id":2,
  "Titulo": "Criar formularios",
  "Data:": "02/10/2023",
  "DataLembrete": "22/10/2023",
  "Descricao": "Lembrete do dia 02"
}

];
//-[GET] messagens - retorna a lista
app.get('/mensagens', function (req, res) {

  // adicionando filtro
  res.send(mensagens.filter(Boolean))
})

//[GET] /messagem {id}-Retorna a lista de mesagens
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  mensagem = mensagens[id];

  if (!mensagem) {
    res.send("Agenda não encontrada.")
    return;
  }

  res.send(mensagem)
})
//[POST]/messagens - criar uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body;
  const id = mensagens.length;
  mensagem.id=id+1;
  mensagens.push(mensagem)
  res.send(mensagem)
})

//[PUT]Atualizar os dados da mensagem
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = req.body;
  mensagens[id] = mensagem;
})

//[delete]Deletar itens do array
app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  delete mensagens[id];
  res.send('Lembrete deletada com sucesso')

})

/********servidor ouvindo***********/
app.listen(port, function () {
  console.log(`Servidor Funcionando:http://localhost:${port}`)
})

/*para rodar produção
npm start ' aqui nessa linha não preciso colocar o run por que o start e comando nativo'
 
 para rodar desenvolvimento
 npm run dev 'aqui a palavra dev e uma palavra que eu criei então precisa do run'
*/