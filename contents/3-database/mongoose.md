# 1. Database

Ao invés de salvar arquivos mockados na nossa aplicação o ideal é que usemos um banco de dados em que temos a flexibilidade de adicionar e remover items.

Node.js suporta qualquer tipo de banco de dados mas uma opção muito comum que combina muito com o ecossistema Javascript é o MongoDB. Esse banco de dados é NoSQL, ou seja, não tem relações, e todos os seus dados são objetos javascript, sendo assim de fácil integração com nosso código.

Para usar driver do MongoDB na nossa aplicação basta rodar o comando `npm install mongodb --save`.
Com isso em outro terminal você pode rodar o comando `mongod`, isso irá fazer com que tenhamos um banco de dados local rodando na porta `27017`, que é a porta padrão do mongodb.

## Conectando ao MongoDB

Importamos o mongodb, e com o connect 

```javascript
// index.js
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/heartdevs", function (err, db) {
  //  if(err) throw err;
});
```

O nome do nosso banco de dados será "heartdevs".

TODO - Pensar se devo considerar já botar o sequelize.
