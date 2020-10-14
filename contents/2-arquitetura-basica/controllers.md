
### 6. Controllers

Como vimos nos capitulos anteriores, depois de definirmos as rotas da nossa aplicação precisamos implementar os métodos que estão relacionados a cada request. O *controller* é o responsável por processar os requests e comunicar-se com a camada da aplicação de Modelo (API's/Banco de dados) e dar uma resposta para cada requisição.

Basicamente, o controller vai ser invocado para cada rota mapeada na aplicação. Vamos considerar um cenário de aplicação onde devemos manter usuários.

Vamos definir os metodos do nosso controller para que interprete cada ação/request:

1. Criar usuario - (createUser)
2. Atualizar usuario - (updateUser)
3. Deleter usuario - (deleteUser)
4. Obter usuario - (getUser/:id) - vamos obter um usuario em especifico

Nosso controller deve ficar assim:

```javascript
// controllers/users.js

// criar usuario
exports.createUser = function (req, res) {};
// atualizar usuario
exports.updateUser = function (req, res) {};
// delete usuario
exports.deleteUser = function (req, res) {};
// obter usuario
exports.getUser = function (req, res) {};
```

Precisamos mapear os metodos do controller com as nossas rotas, portanto vamos importar o nosso controller dentro das nossas rotas.

```javascript
var router = require('express').Router();

var usuarioController = require('../controllers/users');

router.route('/usuario')
  .post(usuarioController.createUser)
  .put(usuarioController.updateUser)
  .delete(usuarioController.deleteUser);

router.route('/usuario/:id)
  .get(usuarioController.getUser)
```

Conforme podemos ver, estamos importando o nosso usuarioController e estamos dizendo para cada rota qual método do controller deve ser chamado.

Vamos atualizar nosso controller, pois precisamos implementar cada método para que ele realize as ações no backend e de uma resposta para o usuario:

```javascript
// controllers/users.js

// criar usuario
exports.createUser = function (req, res) {
  var user = req.body.user;
  
  // se o usuario vem empty vamos retornar uma mensagem de erro
  if(user == undefined){
    res.status(500).send({error: 'User cant be empty.'}).end();
  }

  // chamar o metodo que vai inserir o nosso usuario no banco de dados

  // retornar o usuario criado
  res.status(200).send(user).end();
};

// atualizar usuario
exports.updateUser = function (req, res) {
    var user = req.body.user;
  
  // se o usuario vem empty vamos retornar uma mensagem de erro
  if(user == undefined){
    res.status(500).send({error: 'User cant be empty.'}).end();
  }

  // chamar o metodo que vai atualizar o nosso usuario no banco de dados

  // retornar o usuario atualizado
  res.status(200).send(user).end();
};

// delete usuario
exports.deleteUser = function (req, res) {

  var user_id = req.params.id;
  
  // se o usuario vem empty vamos retornar uma mensagem de erro
    if(user_id == undefined){
    res.status(500).send({error: 'Please provide a user id.'}).end();
    }

    var user = methodToDeleteUserById(user_id); // chamar o metodo que vai obter nosso usuario no banco de dados pelo id

    // retornar que o usuario foi deletado
    res.status(200).send({message: 'User deleted successfully.'}).end();
};

// obter usuario
exports.getUser = function (req, res) {
  var user_id = req.params.id;
  
  // se o usuario vem empty vamos retornar uma mensagem de erro
  if(user_id == undefined){
    res.status(500).send({error: 'Please provide a user id.'}).end();
  }

  var user = methodToGetUserById(user_id); // chamar o metodo que vai obter nosso usuario no banco de dados pelo id

  // retornar o usuario
  res.status(200).send(user).end();
};

```