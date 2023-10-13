const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.use(bodyParser.json());

const mensagens = [
  'Mesagem1',
  'Mesagem2'
];
//-[GET] messagens - retorna a lista
app.get('/mensagens', function (req, res) {
  res.send(mensagens)
})

//[GET] /messagem {id}-Retorna a lista de mesagens
app.get('/mensagens/:id', (req, res) => {
  res.send(mensagens[req.params.id])
})
//[GET]/messagens - criar uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem;
  mensagens[mensagens.length] = mensagem
  res.send(mensagem)
})

//[PUT]Atualizar os dados da mensagem
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = req.body.mensagem
  mensagens[id] = mensagem;
})

//[delete]Deletar itens do array
app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  delete mensagens[id];
  res.send('Messagem deletada com sucesso')

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