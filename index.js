const express = require('express')
const app = express()
const port = 3000;

const itens = ['feijao', 'arroz']

const mensagens = [
  'Mesagem1',
  'Mesagem2'
];
//-[GET] messagens - retorna a lista
app.get('/itens', function (req, res) {
  res.send(mensagens)
})

//[GET] /messagem {id}-Retorna a lista de mesagens
app.get('/mensagem/:id', (req, res) => {
  res.send(mensagens[req.params.id])
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