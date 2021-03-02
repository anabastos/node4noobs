# 3. Definindo rotas

Vimos como fazer um servidor HTTP para nossa aplicação back-end. Esse servidor precisa responder a requests dependendo do URL que é pedido.

Por exemplo, imaginando que tenho um back-end que serve um simples Blog. Se quero posts de uma rede social imagino é esperado que no URL "servidor.com.br/posts" me retorne o conteúdo dos posts e que o URL "servidor.com.br/categories" possa me retornar as categorias dos posts do meu blog.

Quando colocamos uma rota no navegador ele imediatamente faz uma requisição `GET`. Por isso quando rodamos nosso servidor e entramos na porta `http://localhost:3000/`, ele fez uma requisição em nosso servidor em `/`

Esse é o nosso primeiro **end-point**, chamamos de endpoint cada caminho de URL que definimos com um método HTTP. Sendo assim `posts/` ou `categories/` do nosso exemplo anteriores podem ser endpoints de uma aplicação de blog.

Porém precisamos de algo para mapear por exemplo, que código deve ser executado para lidar com a requisição que é recebida. ainda bem que o express já faz esse trabalho pra gente!
 
Isso é o que chamamos de **routing**. Definimos rotas que descrevem como nosso servidor vai responder a requisição do cliente caso ele faça uma certa requisição.

Lembra dessa parte de código que fizemos?

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

No express definimos rotas pelo formato `app.METODO(ROTA, HANDLER)`. Sendo METHOD, o tipo do método HTTP, ROTA o caminho da URL da requisição e HANDLER a função que lida com a requisição e define a resposta que vamos enviar ao cliente.

## 3.1 Testando rotas

Testamos nossa primeira rota usando o navegador para fazer uma requisição `GET`
Caso você esteja usando um Mac ou Linux, com o servidor rodando podemos também usar o `curl` para testar uma requisição pro nosso servidor. Basta rodar o seguinte comando:

``` bash
curl -i http://localhost:5000
```

Que vemos a seguinte resposta

```
HTTP/1.1 200 OK 
Content-Type: text/plain 
Date: Tue, 8 Sep 2015 03:05:08 GMT 
Connection: keep-alive 
Hello World!
```

Mostrando que tivemos um status 200 OK e o conteúdo!

Porém quando queremos testar requisições de forma efetiva e simples geralmente usamos uma ferramenta chamada Amnesia.

TODO -> Como usar o amnesia para bater em rotas

## 3.2 CRUD

O que é uma aplicação CRUD?

### 3.2.1 Criando rotas GET

No nosso exemplo de código fizemos:

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

`get` é uma função do express, e nela definimos com apenas dois argumentos tudo o que precisamos da nossa rota. O primeiro argumento é a rota, no caso é a raiz do nosso servidor `http://localhost:3000/`, e o segundo é uma função. 

Note que essa função recebe dois argumentos, `req` e `res`. `req` no caso é um objeto com dados sobre a requisição que foi feita, e `res` é o objeto com dados sobre a resposta que precisamos enviar! 

Com esse pedaço de código estamos falando para a instância express: "Caso recebamos uma requisição `GET`, na rota '/', responda com a string `"Hello World"`.

### 3.2.2 Criando rotas GET parametrizáveis.

Para lidar com requisições GET podemos enviar parâmetros pela URL. Isso é muito comum de se ver em RESTful API's.

Por exemplo:

**GET**     /user => vai trazer todos os usuários da aplicação

**GET**     /user/:id => vai trazer o usuário com o id especificado

**PUT**     /user/:id => vai editar um usuário com id especificado

**DELETE**  /user/:id => vai deleter um usuário com o id especificado

Como podemos obter os parâmetros da rota? Vamos utilizar como exemplo o nosso segundo cenário, onde obtemos um usuário através de seu id.

```javascript
app.get('/user/:id', (req, res) => {
  const id = req.params.id
  // aqui vai sua logica para obter o usuário (do banco de dados ou de uma API)
  res.send(`$You were looking for user with id = {id}`);
});
```

Conforme podemos ver o nosso ```req.params``` faz com que obtenhamos o parâmetros dentro da nossa rota.
Como no nosso caso enviamos um **id** pela rota a maneira de obter o mesmo é:

```javascript
var id = req.params.id
```

### 3.2.3 Criando rotas POST

Para lidar com requisições POST precisamos instalar o modulo middleware chamado `body-parser`.
O que ele faz é parsear conteúdo enviado dentro da requisição POST em algo usável no javascript.

Instale-o com o comando `npm install body-parser --save` e importe-o no topo do nosso arquivo.
Com a função `app.use` definimos um middleware pra nossa aplicação, que cria um objeto `body` dentro de nossa requisição com o conteúdo que foi enviado.

Agora vamos criar uma requisição de POST.

```javascript
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  const data = req.body
  res.send(`${data.name} Submitted Successfully!`);
});
```

### 3.2.4 Criando rotas PUT

Conforme mostrado no exemplo anterior (POST), devemos utilizar o nosso middleware `body-parser` para que obtenhamos o conteúdo que foi enviado através do request.

A única diferença entre POST e PUT e que o *PUT* é utilizado para atualizar um recurso, já o *POST* é utilizado para criar um novo recurso.

```javascript
app.put('/user', (req, res) => {
  var user = req.body.user;
  // faça atualize o usuário...
  res.send(`Updated user is ${user}`);
});
```

### 3.2.5 Criando rotas DELETE

Esse e o tipo de rota para deletar uma entidade/recurso. Como mencionado anteriormente, é muito comum se ver em RESTful API's as rotas de DELETE para excluir/deletar dados.

```javascript
app.delete('/user/:id', (req, res) => {
  var id = req.params.id;
  // delete o usuário pelo id ...
  res.send('User deleted successfully!');
});
```
