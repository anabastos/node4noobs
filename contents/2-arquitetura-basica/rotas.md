
### 6. Definindo rotas

Para aplicações back-end geralmente queremos um servidor HTTP. Esse servidor precisa responder a requests dependendo do URL que é pedido.

Por exemplo, imaginando que tenho um back-end que serve um simples Blog. Se quero posts de uma rede social imagino é esperado que no URI "servidor.com.br/posts" me retorne o conteúdo dos posts e que o URI "servidor.com.br/categories" possa me retornar as categorias dos posts do meu blog.

Quando colocamos uma rota no navegador ele imediatamente faz uma requisição `GET`. Por isso quando rodamos nosso servidor e entramos na porta `http://localhost:3000/`, ele fez uma requisição em nosso servidor em `/`

Esse é o nosso primeiro **end-point**, chamamos de endpoint cada caminho de URI que definimos com um metodo HTTP. Sendo assim `posts/` ou `categories/` do nosso exemplo anteriores podem ser endpoints de uma aplicação de blog.

Porém precisamos de algo para mapear por exemplo, que código deve ser executado para lidar com a requisição que é recebida. ainda bem que o express já faz esse trabalho pra gente!
 
Isso é o que chamamos de **routing**. Definimos rotas que descrevem como nosso servidor vai responder a requisição do cliente caso ele faça uma certa requisição.

Lembra dessa parte de código que fizemos?

```javascript
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
```

No express definimos rotas pelo formato `app.METODO(ROTA, HANDLER)`. Sendo METHOD, o tipo do metodo HTTP, ROTA o caminho da URL da requisição e HANDLER a função que lida com a requisição e define a resposta que vamos enviar ao cliente.

### 6.1 Testando rotas

Porém quando queremos testar requisições de forma efetiva geralmente usamos uma ferramenta chamada Amnesia.

TODO -> Como usar o amnesia para bater em rotas

### 6.2 CRUD

O que é uma aplicação CRUD?

### 6.2.1 Criando rotas GET

No nosso exemplo de código fizemos:

```javascript
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
```

`get` é uma função do express, e nela definimos com apenas dois argumentos tudo o que precisamos da nossa rota. O primeiro argumento é a rota, no caso é a raiz do nosso servidor `http://localhost:3000/`, e o segundo é uma função. 

Note que essa função recebe dois argumentos, `req` e `res`. `req` no caso é um objeto com dados sobre a requisição que foi feita, e `res` é o objeto com dados sobre a resposta que precisamos enviar! 

Com esse pedaço de código estamos falando para a instância express: "Caso recebamos uma requisição `GET`, na rota '/', responda com a string `"Hello World"`.

### 6.2.2 Criando rotas GET parametrizaveis.

### 6.2.3 Criando rotas POST

Agora vamos criar uma requisição de POST.  
```javascript
app.post('/', (req, res) => {
    res.send('Hello World!');
  });
```

TODO como pegar coisas do corpo

### 6.2.4 Criando rotas PUT

```javascript
app.post('/user', (req, res) => {
    res.send('Hello World!');
  });
```

### 6.2.5 Criando rotas DELETE

```javascript
app.post('/user', (req, res) => {
    res.send('Hello World!');
  });
```