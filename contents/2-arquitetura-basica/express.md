# 2. Express

O **Express** é um micro framework para gerenciamento de rotas, para entender como ele funciona iremos fazer um hello world.

## 2.1 Hello World

Primeiramente use os conhecimentos adquiridos na seção anterior para criar um projeto vazio com o npm. Caso não tenha lido a seção anterior [clique aqui](../1-primeiros-passos/npm.md).

Agora com o nosso projeto criado e com o express instalado após rodar o comando `npm i express` no diretório do nosso projeto, na sequência basta abrir seu editor de código e começar a codar :)

Dentro do nosso index.js vamos importar e instanciar o express

```javascript
const express = require('express');
const app = express();
```

O "app" será nossa instância do servidor. Ele que escuta portas, lida com middlewares (vamos explicar depois o que são!) e lida com requisições get e post.

Definiremos uma porta onde o servidor irá ficar escutando por requisições.

```javascript
const port = 3000;
```

Agora iremos criar nossa primeira rota, ela será do tipo GET em / e irá retornar o texto "Hello World!"

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Por último iremos fazer com que a aplicação escute na porta que definimos anteriormente.

```javascript
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

No final nosso index.js ficará assim:

```javascript
// index.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

Para executar a aplicação rode o comando que definimos nos passos anteriores para iniciar o nosso servidor, o `npm run start`, agora abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

Temos uma mensagem `Hello World!` e um servidor funcionando! 

Note que ao tentarmos usar outro caminho no URL como [http://localhost:3000/batata](http://localhost:3000/batata) recebemos uma mensagem `404 Not Found`.

## 2.2 