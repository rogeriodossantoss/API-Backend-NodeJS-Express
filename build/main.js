var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());
var mensagens = [{
        "id": 1,
        "Titulo": "Criar relatório",
        "Data:": "01/10/2023",
        "DataLembrete": "25/10/2023",
        "Descricao": "Lembrete do dia 01"
    },
    {
        "id": 2,
        "Titulo": "Criar formularios",
        "Data:": "02/10/2023",
        "DataLembrete": "22/10/2023",
        "Descricao": "Lembrete do dia 02"
    }
];
//-[GET] messagens - retorna a lista
app.get('/mensagens', function (req, res) {
    // adicionando filtro
    res.send(mensagens.filter(Boolean));
});
//[GET] /messagem {id}-Retorna a lista de mesagens
app.get('/mensagens/:id', function (req, res) {
    var id = req.params.id - 1;
    var mensagem = mensagens[id];
    if (!mensagem) {
        res.send("Agenda não encontrada.");
        return;
    }
    res.send(mensagem);
});
//[POST]/messagens - criar uma novo lembrete
app.post('/mensagens', function (req, res) {
    var mensagem = req.body;
    var id = mensagens.length;
    mensagem.id = id + 1;
    mensagens.push(mensagem);
    res.send(mensagem);
});
//[PUT]Atualizar informações do lembrete
app.put('/mensagens/:id', function (req, res) {
    var id = req.params.id - 1;
    var mensagem = req.body;
    mensagens[id] = mensagem;
});
//[delete]Deletar lembretes
app.delete('/mensagens/:id', function (req, res) {
    var id = req.params.id - 1;
    delete mensagens[id];
    res.send('Lembrete deletada com sucesso');
});
/********servidor ouvindo***********/
app.listen(port, function () {
    console.log("Servidor Funcionando:http://localhost:".concat(port));
});
/*
Foi utulizado o postman para teste de add, deletar e atualizar informações
*/ 
