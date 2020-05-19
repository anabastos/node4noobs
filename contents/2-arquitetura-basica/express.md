## 4. Express

O **Express** é um micro framework para gerenciamento de rotas, para entender como ele funciona iremos fazer um hello world.

### 4.1 Hello World

Primeiramente use os conhecimentos adiquiridos na seção anterior para criar um projeto vazio com o npm. Caso não tenha lido a seção anterior [clique aqui](../1-primeiros-passos/npm.md).

Agora com o nosso projeto criado vamos instalar o express rodando o comando `npm i express` no diretório do nosso projeto, na sequência abra seu editor de código e vamos começar a codar :)

Dentro do nosso index.js vamo importar e instanciar o express

```javascript
  const express = require('express');
  const app = express();
```

Definiremos uma porta onde o servidor irá ficar escutando por requisições

```javascript
  const port = 3000;
```

Agora iremos criar nossa primeira rota, ela será do tipo GET em / e irá retornar o texto "Hello World!"

```javascript
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
```

Por último iremos fazer com que a aplicação escute na porta que definimos anteriormente

```javascript
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
```

No final nosso index.js ficará assim

```javascript
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

Para executar a aplicação rode o comando `node index.js`, agora abra seu navegador e acesse [http://localhost:3000](http://localhost:3000)
