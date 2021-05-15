# 5. Middlewares

Até aqui, sabemos que o Express é um gerenciador de rotas responsável por controlar o fluxo de requisições (entrada) e de respostas (saída) de uma aplicação. E é neste fluxo que entra os middlewares.

## 5.1 Mas o que são Middlewares?

Basicamente, middlewares são funções que tem acesso ao objeto da requisição e resposta, além do próximo middleware da pilha que deve ser executado.

### 5.1.1 Sintaxe

Uma função middleware possui a seguinte sintaxe:

```js
function myMiddleware (req, res, next) {
  // seu código aqui
  next();
}
```

- `req`: objeto da requisição;
- `res`: objeto de resposta;
- `next`: função responsável por chamar o próximo middleware da pilha;

### 5.1.2 Integrando ao express
 
```js
function myMiddleware (req, res, next) {
  console.log("Primeiro log");
  next();
}

app.use(myMiddleware);

app.get("/", (req, res) => {
  console.log("Segundo log");
  return res.send("Hello World");
});
```

## 5.2 Empregabilidade

Na prática, funções de middlewares podem executar as seguintes tarefas:

- Executar qualquer código; 
- Fazer mudanças nos objetos de solicitação e resposta; 
- Encerrar o ciclo de solicitação-resposta; 
- Chamar a próxima função de middleware na pilha.

Além disso, a maioria das aplicações usam middlewares de terceiros para simplificar tarefas comuns de desenvolvimento web, como trabalhar com cookies, sessões, autenticação de usuários, acessar dados POST e JSON, log, etc.

Por exemplo, no módulo sobre [Rotas](./rotas.md), ao realizar a instalação do módulo `body-parser` para tratar o body das nossas requisições estávamos incluindo um middleware de terceiro à nossa aplicação:

```js
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  const data = req.body
  res.send(`${data.name} Submitted Successfully!`);
});
```

## 5.3 Ordem de chamada

Os middlewares e as funções de roteamento (GET, POST, PUT, DELETE) são chamadas na mesma ordem em que são declaradas. 

Por exemplo, imagine que o seu blog possue uma área interna (admin) que somente os usuários autenticados podem acessar. 
 
Podemos então definir um middleware responsável por verificar em todas as requisições se o usuário está autenticado.

O middleware precisa ser definido antes das funções de roteamento:

```js
...
app.use((req, res, next) => {
  if (!userIsLogged(req)) {
      return res.redirect("/login"); // redirecionamento para a página de login
  }

  next(); // chama a próxima função da pilha
});

app.get(`/admin/posts`, (req, res) => {
  // seu código aqui
});
...
```

Este middleware realiza uma verificação se o usuário está autenticado. Se sim, chama a próxima função da pilha através da chamada `next()`. Caso contrário, encerra o ciclo e redireciona o usuário a página de login.

## 5.4 Log de acesso

Outro exemplo prático é a criação de um middleware que é executado toda vez que chamamos um endpoint da nossa aplicação. O objetivo deste middleware é loggar os acessos.

Para isso, vamos:

- Utilizar o módulo externo `node-color-log` para apresentar as mensagens. Este módulo foi apresentado neste tutorial [Módulos](../1-primeiros-passos/modulos.md)
- Criar um arquivo e definir a função de middleware;
- Utilizar o objeto `req` para pegar informações da requisição (como method HTTP, endpoint de acesso e host) e exibir no log;
- E também utilizaremos a função `next` para que depois de exibir o log de acesso, a aplicação chame o próximo middleware da pilha.

Arquivo `./src/middlewares/log-access.js`:

```js
import logger from 'node-color-log';

function logAccess (req, res, next) {
  const { hostname, method, url } = req;
  
  logger.info(`[LOG] hostname = ${hostname}`);
  logger.info(`[LOG] method = ${method}`);
  logger.info(`[LOG] endpoint = ${url}`);
  logger.info("\n");

  next();
}

export default logAccess;
```

Arquivo `./src/index.js`:

```js
import express from 'express';
import logAccess from './middlewares/log-access';

const app = express();
app.use(logAccess);

app.get("/", (req, res) => {
  return res.send("Hello World");
});
...
```
