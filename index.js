const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

const mensagens = [
  'Mesagem1',
  'Mesagem2'
];
//[GET] /messagem -Retorna a lista de mesagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
})

//[GET] /messagem {id}-Retorna a lista de mesagens
app.get('/mensagem/:id', (req, res) => {
  const id = req.params.id;

  const mensagem = mensagens[id];

  res.send(mensagem)

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