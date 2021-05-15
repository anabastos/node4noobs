# 4. Config

Como devo fazer minhas configurações no NodeJS?  
R: Usa-se o Dotenv (.env).

## 4.1 Criando um arquivo .env

Inicialmente você deve criar um arquivo .env na raiz do seu projeto e definir valores para chaves. Mas como é isso?

```
# .env

KEY=value
DB_NAME=node4noobs
DB_PASSWORD=
DB_HOST=localhost
```

- As chaves por padrão são em caixa alta, mas não é uma exigência;
- As chaves não podem ser espaçadas (uma sugestão é usar underline, ex: `DB_NAME`);
- Os valores podem ser espaçados e se for um valor vazio será retornado uma string vazia;

## 4.2 Usando as configurações do arquivo .env

### process

No Node.JS depois da versão 16 temos o modulo interno global chamado chamado `process` por padrão que guarda estas váriaveis internas. Não é necessário importá-lo.
Esse objeto tem várias informações sobre o programa em tempo de execução e é essencial para o ecossistema Node.Js.
Por exemplo, podemos pegar a porta que está rodando com o `process.env.PORT`(A porta precisa ter sido colocada no objeto global. Hosts cloud geralmente colocam isso por de baixo dos panos)


Vamos usar uma biblioteca chamada `dotenv` para colocar as váriaveis de ambiente dentro do `process`. Ele vai ler nosso .env e inicializar os valores.

Para isso vamos instala-la com o comando `npm install dotenv --save-dev`

Rodar o comando `require('dotenv').config();` dentro de um arquivo JS já é o suficiente para termos acesso aos dados.
```javascript
//test.js

require('dotenv').config();

console.log(process.env.DB_NAME) // node4noobs
```

Certamente `process.env.DB_NAME` não é forma mais bonita de falar que esse dado é o nome do banco. Também não queremos ficar colocando este comando de config em todo lugar.

### 4.2.1 Criação de um arquivo de configuração

Precisamos criar um arquivo que retorna um objeto com todos valores da configuração dentro do mundo javascript da minha aplicação.
Esse arquivo faz o import da configuração do .env e exporta um objeto com as chaves definidas;

```javascript
// config.js
require('dotenv').config();

export default {
  key: process.env.KEY, // "value"
  dbName: process.env.DB_NAME, // "node4noobs"
  dbPassword: process.env.DB_PASSWORD, // ""
  host: process.env.DB_HOST, // "localhost"
};
```

### 4.2.2 Usando o arquivo de configuração que usa o arquivo .env

Agora é só usar o arquivo de configuração como você usaria qualquer arquivo de constantes.

```javascript
// index.js
import config from "./config";

console.log(config);
```

O que é retornado é um objeto, como esperado:

```javascript
{
  key: 'value',
  dbName: 'node4noobs',
  dbPassword: '',
  host: 'localhost'
}
```

## 4.3 O que geralmente colocamos nos .env

Geralmente, os .env são repletos de variáveis de configuração, essa variáveis servem para representar seu ambiente.
Por exemplo: no ambiente de desenvolvimento e de produção, os e-mails usados, endereço do host, nome do banco de dados e senhas são diferentes.

## 4.4 Observações sobre o ambiente de produção

O arquivo `.env` nunca deve estar no código fonte do repositório. Um arquivo `.env.example` com valores vazios para as chaves pode ser criado e commitado para ajudar os próximos desenvolvedores do projeto.
Para projetos de produção é recomendado usar as configurações de ambiente dentro do serviço de hospedagem como Netlify, Vercel, etc. Isso é feito para garantir integridade dos serviços e chaves guardados.

Se estamos usando um host de deploy em cloud que já insere váriaveis de ambiente no Node.js esse comando do `dotenv` pode REESCREVER os campos.
Uma solução seria checar a variavel de ambiente que fala se estamos em produção ou não para só carregarmos o .env em desenvolvimento.

```javascript
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
```